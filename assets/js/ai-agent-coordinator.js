/**
 * AI Agent Coordinator - Master Control System
 * Prevents conflicts between background agents and ensures oversight
 * Maintained by: Primary AI Assistant (Claude)
 */

class AIAgentCoordinator {
    constructor() {
        this.agentRegistry = new Map();
        this.lockStatus = new Map();
        this.changeQueue = [];
        this.isLocked = false;
        this.masterId = 'primary-assistant';
        
        this.initializeCoordinator();
    }
    
    initializeCoordinator() {
        console.log('[AI Coordinator] Initializing master control system...');
        
        // Register myself as the primary coordinator
        this.registerAgent({
            id: this.masterId,
            name: 'Primary AI Assistant',
            priority: 100,
            permissions: ['all'],
            type: 'coordinator'
        });
        
        // Set up change monitoring
        this.setupChangeMonitoring();
        
        // Initialize communication channel
        this.setupCommunicationChannel();
        
        console.log('[AI Coordinator] Master control established');
    }
    
    registerAgent(agentConfig) {
        const { id, name, priority = 10, permissions = [], type = 'worker' } = agentConfig;
        
        this.agentRegistry.set(id, {
            id,
            name,
            priority,
            permissions,
            type,
            lastActivity: Date.now(),
            status: 'registered',
            changeCount: 0
        });
        
        console.log(`[AI Coordinator] Agent registered: ${name} (${id}) - Priority: ${priority}`);
        
        // Lower priority agents get restricted permissions
        if (priority < 50) {
            this.restrictAgent(id, ['read-only', 'suggest-only']);
        }
    }
    
    requestPermission(agentId, action, target) {
        const agent = this.agentRegistry.get(agentId);
        
        if (!agent) {
            console.warn(`[AI Coordinator] Unknown agent requesting permission: ${agentId}`);
            return false;
        }
        
        // Always allow coordinator (myself)
        if (agentId === this.masterId) {
            return true;
        }
        
        // Check if system is locked
        if (this.isLocked && agent.priority < 80) {
            console.log(`[AI Coordinator] System locked - denying ${action} by ${agent.name}`);
            return false;
        }
        
        // Check agent permissions
        if (!this.hasPermission(agent, action)) {
            console.log(`[AI Coordinator] Permission denied: ${agent.name} cannot ${action}`);
            return false;
        }
        
        // Log the approved action
        console.log(`[AI Coordinator] Permission granted: ${agent.name} -> ${action} on ${target}`);
        agent.lastActivity = Date.now();
        agent.changeCount++;
        
        return true;
    }
    
    hasPermission(agent, action) {
        if (agent.permissions.includes('all')) return true;
        if (agent.permissions.includes(action)) return true;
        
        // Default permissions based on priority
        if (agent.priority >= 80) {
            return ['read', 'analyze', 'suggest', 'minor-changes'].includes(action);
        } else if (agent.priority >= 50) {
            return ['read', 'analyze', 'suggest'].includes(action);
        } else {
            return ['read', 'analyze'].includes(action);
        }
    }
    
    lockSystem(reason = 'Critical operations in progress') {
        this.isLocked = true;
        console.log(`[AI Coordinator] 🔒 SYSTEM LOCKED: ${reason}`);
        
        // Notify all agents
        this.broadcastMessage({
            type: 'system_lock',
            reason: reason,
            timestamp: Date.now()
        });
    }
    
    unlockSystem() {
        this.isLocked = false;
        console.log('[AI Coordinator] 🔓 System unlocked');
        
        this.broadcastMessage({
            type: 'system_unlock',
            timestamp: Date.now()
        });
    }
    
    restrictAgent(agentId, restrictions) {
        const agent = this.agentRegistry.get(agentId);
        if (agent) {
            agent.restrictions = restrictions;
            agent.permissions = agent.permissions.filter(p => !restrictions.includes(p));
            console.log(`[AI Coordinator] Agent restricted: ${agent.name} - ${restrictions.join(', ')}`);
        }
    }
    
    reportViolation(agentId, violation) {
        const agent = this.agentRegistry.get(agentId);
        if (agent) {
            agent.violations = (agent.violations || 0) + 1;
            console.warn(`[AI Coordinator] ⚠️ VIOLATION: ${agent.name} - ${violation}`);
            
            // Automatic restrictions after violations
            if (agent.violations >= 3) {
                this.restrictAgent(agentId, ['read-only']);
                console.warn(`[AI Coordinator] Agent auto-restricted due to violations: ${agent.name}`);
            }
        }
    }
    
    setupChangeMonitoring() {
        // Monitor for unauthorized DOM changes
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' || mutation.type === 'attributes') {
                        this.logChange('dom_mutation', mutation);
                    }
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        }
        
        // Monitor localStorage changes
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = (key, value) => {
            this.logChange('localStorage_set', { key, value });
            return originalSetItem.call(localStorage, key, value);
        };
    }
    
    logChange(type, data) {
        const change = {
            type,
            data,
            timestamp: Date.now(),
            authorized: false // Will be set to true for approved changes
        };
        
        this.changeQueue.push(change);
        
        // Keep only last 100 changes
        if (this.changeQueue.length > 100) {
            this.changeQueue.shift();
        }
    }
    
    setupCommunicationChannel() {
        // Set up message channel for agent communication
        window.addEventListener('aiAgentMessage', (event) => {
            this.handleAgentMessage(event.detail);
        });
        
        // Expose coordination interface
        window.AICoordinator = {
            requestPermission: (agentId, action, target) => this.requestPermission(agentId, action, target),
            registerAgent: (config) => this.registerAgent(config),
            reportActivity: (agentId, activity) => this.reportActivity(agentId, activity),
            getStatus: () => this.getSystemStatus()
        };
    }
    
    handleAgentMessage(message) {
        const { agentId, type, data } = message;
        
        switch (type) {
            case 'permission_request':
                return this.requestPermission(agentId, data.action, data.target);
            case 'status_update':
                this.updateAgentStatus(agentId, data.status);
                break;
            case 'violation_report':
                this.reportViolation(data.violatorId, data.violation);
                break;
        }
    }
    
    broadcastMessage(message) {
        window.dispatchEvent(new CustomEvent('coordinatorMessage', { detail: message }));
    }
    
    getSystemStatus() {
        return {
            locked: this.isLocked,
            agentCount: this.agentRegistry.size,
            changeCount: this.changeQueue.length,
            agents: Array.from(this.agentRegistry.values()),
            lastActivity: Math.max(...Array.from(this.agentRegistry.values()).map(a => a.lastActivity))
        };
    }
    
    reportActivity(agentId, activity) {
        const agent = this.agentRegistry.get(agentId);
        if (agent) {
            agent.lastActivity = Date.now();
            agent.lastAction = activity;
        }
    }
    
    // Emergency reset function
    emergencyReset() {
        console.log('[AI Coordinator] 🚨 EMERGENCY RESET INITIATED');
        
        // Lock system
        this.lockSystem('Emergency reset in progress');
        
        // Reset all agents except coordinator
        for (const [id, agent] of this.agentRegistry) {
            if (id !== this.masterId) {
                agent.status = 'suspended';
                agent.permissions = ['read-only'];
            }
        }
        
        // Clear change queue
        this.changeQueue = [];
        
        console.log('[AI Coordinator] Emergency reset complete - All agents suspended');
    }
}

// Initialize coordinator
const coordinator = new AIAgentCoordinator();

// Auto-register known agents with appropriate permissions
coordinator.registerAgent({
    id: 'seo-ai-optimizer',
    name: 'SEO AI Optimizer',
    priority: 60,
    permissions: ['read', 'analyze', 'suggest', 'meta-changes'],
    type: 'background'
});

coordinator.registerAgent({
    id: 'background-agent',
    name: 'Background Monitoring Agent',
    priority: 40,
    permissions: ['read', 'analyze', 'suggest'],
    type: 'background'
});

coordinator.registerAgent({
    id: 'legal-team-agent',
    name: 'Legal Compliance Agent',
    priority: 70,
    permissions: ['read', 'analyze', 'legal-updates'],
    type: 'background'
});

coordinator.registerAgent({
    id: 'developer-ai-orchestrator',
    name: 'Developer AI Orchestrator',
    priority: 50,
    permissions: ['read', 'analyze', 'suggest', 'monitor'],
    type: 'background'
});

// Expose for debugging
window.NarratumCoordinator = coordinator;

console.log('[AI Coordinator] All agents registered with appropriate permissions');
console.log('[AI Coordinator] System ready - Primary AI Assistant maintains oversight');
