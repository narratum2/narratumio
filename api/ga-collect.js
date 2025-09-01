// Serverless function for GA4 Measurement Protocol (Vercel/Node handler)
// Environment variables required:
// - GA4_MEASUREMENT_ID (e.g., G-PFKPP0SCT4)
// - GA4_API_SECRET (created in GA4 → Admin → Data Streams → Measurement Protocol API secrets)
// - Optional: GA4_STREAM_ID (e.g., 12102962304)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const measurementId = process.env.GA4_MEASUREMENT_ID;
    const apiSecret = process.env.GA4_API_SECRET;
    const streamId = process.env.GA4_STREAM_ID; // optional

    if (!measurementId || !apiSecret) {
        res.status(500).json({ error: 'Server not configured: missing GA4_MEASUREMENT_ID or GA4_API_SECRET' });
        return;
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

        // Build MP payload
        const payload = {
            client_id: body.client_id || undefined,
            user_id: body.user_id || undefined,
            non_personalized_ads: true,
            events: Array.isArray(body.events)
                ? body.events
                : [{ name: body.event_name || 'custom_event', params: body.params || {} }]
        };

        // Add timestamp if provided; otherwise let GA assign
        if (body.timestamp_micros) {
            payload.timestamp_micros = body.timestamp_micros;
        }

        // Enrich params with stream id if provided
        if (streamId && payload.events && payload.events[0] && payload.events[0].params) {
            payload.events[0].params.ga_stream_id = streamId;
        }

        const endpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`;

        const gaResp = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!gaResp.ok) {
            const text = await gaResp.text();
            res.status(gaResp.status).json({ error: 'GA4 MP error', details: text });
            return;
        }

        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Server error', message: err.message });
    }
}


