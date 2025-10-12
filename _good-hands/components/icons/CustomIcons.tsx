/**
 * Good Hands Custom Iconography System
 * 
 * Design Philosophy:
 * - Elegant, refined line work
 * - Subtle curves inspired by Portuguese tiles
 * - Consistent 2px stroke weight
 * - Rounded terminals for sophistication
 * - Gold accent color integration
 * - Scales beautifully from 16px to 64px
 */

import React from 'react'

interface IconProps {
  className?: string
  size?: number
  color?: string
}

// SERVICE ICONS

export const HairIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant scissors with curved handles */}
    <path
      d="M9 3L15 9M9 21L15 15M6 6C7.10457 6 8 5.10457 8 4C8 2.89543 7.10457 2 6 2C4.89543 2 4 2.89543 4 4C4 5.10457 4.89543 6 6 6ZM6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22ZM20 12H15L12 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const NailsIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant nail polish bottle with brush */}
    <path
      d="M10 2H14L15 8H9L10 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 8H15V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V8Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 8V6M13 8V6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const SkincareIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Spa droplet with leaf accent */}
    <path
      d="M12 3C12 3 5 9 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 9 12 3 12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18C10.8954 18 10 17.1046 10 16C10 14.5 12 13 12 13C12 13 14 14.5 14 16C14 17.1046 13.1046 18 12 18Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const MakeupIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant makeup brush */}
    <path
      d="M3 21L9 15M9 15L15 9L21 3L18 6L15 9M9 15L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 10C14.5523 10.5523 14.5523 11.4477 14 12C13.4477 12.5523 12.5523 12.5523 12 12C11.4477 11.4477 11.4477 10.5523 12 10C12.5523 9.44772 13.4477 9.44772 14 10Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const WellnessIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Lotus flower */}
    <path
      d="M12 2C12 2 8 6 8 10C8 12 9.5 13 12 13C14.5 13 16 12 16 10C16 6 12 2 12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C12 13 6 14 4 18C4 20 6 22 12 22C18 22 20 20 20 18C18 14 12 13 12 13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// FEATURE ICONS

export const CheckIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant checkmark with flourish */}
    <path
      d="M20 6L9 17L4 12"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const StarIcon = ({ className = '', size = 24, color = 'currentColor', filled = false }: IconProps & { filled?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Refined 5-point star */}
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const LocationIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Map pin with elegant curves */}
    <path
      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
)

export const CalendarIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant calendar */}
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 10H21M8 2V6M16 2V6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PhoneIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Refined phone icon */}
    <path
      d="M22 16.92V19.92C22 20.52 21.5 21.03 20.9 21.03C9.4 20.52 2 13.12 2 3.09C2 2.49 2.5 2 3.1 2H6.1C6.7 2 7.19 2.49 7.19 3.09C7.19 4.43 7.41 5.7 7.81 6.89C7.94 7.27 7.83 7.69 7.53 7.99L5.79 9.73C7.46 13.03 10.01 15.58 13.31 17.25L15.05 15.51C15.35 15.21 15.77 15.1 16.15 15.23C17.34 15.63 18.61 15.85 19.95 15.85C20.55 15.85 21.04 16.34 21.04 16.94L22 16.92Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const EmailIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant envelope */}
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7L12 13L22 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ClockIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Refined clock */}
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6V12L16 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const HeartIcon = ({ className = '', size = 24, color = 'currentColor', filled = false }: IconProps & { filled?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant heart */}
    <path
      d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.12084 20.84 4.61V4.61Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const SparklesIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant sparkles */}
    <path
      d="M12 3L13.5 7.5L18 9L13.5 10.5L12 15L10.5 10.5L6 9L10.5 7.5L12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 4L19.5 5.5L21 6L19.5 6.5L19 8L18.5 6.5L17 6L18.5 5.5L19 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 16L19.5 17.5L21 18L19.5 18.5L19 20L18.5 18.5L17 18L18.5 17.5L19 16Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// NAVIGATION ICONS

export const MenuIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant menu bars */}
    <path
      d="M3 6H21M3 12H21M3 18H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CloseIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant X */}
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArrowRightIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant arrow */}
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ChevronDownIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant chevron */}
    <path
      d="M6 9L12 15L18 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// SPECIALTY ICONS

export const CrownIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant crown for premium */}
    <path
      d="M2 20H22M2 20L5 9L9 13L12 6L15 13L19 9L22 20M2 20H4M22 20H20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="5" cy="9" r="1.5" fill={color} />
    <circle cx="12" cy="6" r="1.5" fill={color} />
    <circle cx="19" cy="9" r="1.5" fill={color} />
  </svg>
)

export const TileIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Portuguese azulejo tile pattern */}
    <rect x="2" y="2" width="20" height="20" rx="2" stroke={color} strokeWidth="2" />
    <path
      d="M2 12H22M12 2V22M7 7L12 12L17 7M7 17L12 12L17 17"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const TramIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Lisbon tram icon */}
    <rect x="6" y="4" width="12" height="16" rx="2" stroke={color} strokeWidth="2" />
    <path
      d="M6 12H18M6 8H18M9 16H9.01M15 16H15.01M9 20L7 22M15 20L17 22M12 2V4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// UTILITY ICONS

export const SearchIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant search */}
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const FilterIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant filter */}
    <path
      d="M4 6H20M7 12H17M10 18H14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const UserIcon = ({ className = '', size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elegant user profile */}
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// EXPORT ALL ICONS
export const CustomIcons = {
  // Services
  Hair: HairIcon,
  Nails: NailsIcon,
  Skincare: SkincareIcon,
  Makeup: MakeupIcon,
  Wellness: WellnessIcon,
  
  // Features
  Check: CheckIcon,
  Star: StarIcon,
  Location: LocationIcon,
  Calendar: CalendarIcon,
  Phone: PhoneIcon,
  Email: EmailIcon,
  Clock: ClockIcon,
  Heart: HeartIcon,
  Sparkles: SparklesIcon,
  
  // Navigation
  Menu: MenuIcon,
  Close: CloseIcon,
  ArrowRight: ArrowRightIcon,
  ChevronDown: ChevronDownIcon,
  
  // Specialty
  Crown: CrownIcon,
  Tile: TileIcon,
  Tram: TramIcon,
  
  // Utility
  Search: SearchIcon,
  Filter: FilterIcon,
  User: UserIcon,
}

export default CustomIcons


