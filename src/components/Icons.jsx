import React from 'react';

// Central icon registry — all SVGs live here, imported wherever needed.

// ── UI / navigation icons ──────────────────────────────────────────────────

export const WhatsAppIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const SearchIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size} height={size}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export const CartIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const UserIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const ChevronDownIcon = ({ size = 13, className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size} height={size} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MenuIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size} height={size}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

export const CloseIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size} height={size}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const HeartIcon = ({ size = 17 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const FilterIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <line x1="4" y1="6"  x2="20" y2="6"  strokeLinecap="round" />
    <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
    <line x1="11" y1="18" x2="13" y2="18" strokeLinecap="round" />
  </svg>
);

export const HomeIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

export const GridIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const ServicesIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={size} height={size}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v4M10 14h4" strokeLinecap="round" />
  </svg>
);

export const ArrowRightIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={size} height={size}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ── Service / category icons (coloured illustrative) ───────────────────────

export const MedicalIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <path d="M26 44s-17-10-17-21a10 10 0 0 1 17-7.4A10 10 0 0 1 43 23c0 11-17 21-17 21z" fill="#ff4757" />
    <path d="M14 24h5.5l2.5-5 4 10 2.5-5H35" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ITIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="8" y="12" width="36" height="24" rx="3" fill="#4a90d9" />
    <rect x="12" y="15" width="28" height="17" rx="1.5" fill="#c8e6ff" />
    <rect x="18" y="38" width="16" height="3" rx="1.5" fill="#4a90d9" />
    <rect x="14" y="41" width="24" height="2" rx="1" fill="#4a90d9" />
    <circle cx="37" cy="33" r="7" fill="#f5a623" />
    <path d="M37 30v3.5l2 2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const FinanceIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="10" y="14" width="32" height="26" rx="4" fill="#27ae60" />
    <rect x="14" y="18" width="24" height="14" rx="2" fill="#fff" opacity=".9" />
    <rect x="17" y="21" width="6" height="2" rx="1" fill="#27ae60" />
    <rect x="17" y="25" width="6" height="2" rx="1" fill="#27ae60" />
    <rect x="17" y="29" width="6" height="2" rx="1" fill="#27ae60" />
    <rect x="29" y="21" width="6" height="2" rx="1" fill="#27ae60" />
    <rect x="29" y="25" width="6" height="2" rx="1" fill="#27ae60" />
    <rect x="29" y="29" width="6" height="2" rx="1" fill="#27ae60" />
    <circle cx="38" cy="36" r="7" fill="#f5a623" />
    <text x="38" y="40" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">$</text>
  </svg>
);

export const RadioIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <circle cx="26" cy="30" r="12" fill="#8e44ad" />
    <circle cx="26" cy="30" r="6" fill="#fff" />
    <circle cx="26" cy="30" r="3" fill="#8e44ad" />
    <path d="M16 20c2.7-3.5 6.3-5.5 10-5.5s7.3 2 10 5.5" stroke="#8e44ad" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M12 17c4-5.5 8.5-8.5 14-8.5s10 3 14 8.5" stroke="#c39bd3" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="24" y="14" width="4" height="8" rx="2" fill="#8e44ad" />
  </svg>
);

export const TutorIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="9" y="22" width="34" height="22" rx="3" fill="#3498db" />
    <rect x="13" y="25" width="26" height="15" rx="1.5" fill="#c8e6ff" />
    <path d="M22 44h8l1 3H21l1-3z" fill="#3498db" />
    <rect x="18" y="47" width="16" height="2" rx="1" fill="#3498db" />
    <circle cx="26" cy="14" r="6" fill="#f39c12" />
    <path d="M20 20c-3 2-5 5-5 9h22c0-4-2-7-5-9" fill="#f39c12" opacity=".6" />
    <path d="M20 9h12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 9l-4-3h8l-4 3z" fill="#fff" />
  </svg>
);

export const PropertyIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="10" y="22" width="32" height="24" rx="2" fill="#2980b9" />
    <path d="M8 24L26 10l18 14" fill="#3498db" />
    <rect x="18" y="30" width="7" height="8" rx="1" fill="#fff" />
    <rect x="27" y="30" width="7" height="5" rx="1" fill="#c8e6ff" />
    <circle cx="38" cy="38" r="7" fill="#f39c12" />
    <path d="M35 38h6M38 35v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RealEstateIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <path d="M8 26L26 12l18 14v22H8V26z" fill="#27ae60" />
    <path d="M8 26L26 12l18 14" fill="#2ecc71" />
    <rect x="19" y="32" width="7" height="9" rx="1" fill="#fff" />
    <rect x="28" y="32" width="8" height="6" rx="1" fill="#a8e6cf" />
    <circle cx="39" cy="16" r="6" fill="#f5a623" />
    <path d="M36 16l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SummerIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <circle cx="26" cy="22" r="9" fill="#f39c12" />
    <g stroke="#f39c12" strokeWidth="2.2" strokeLinecap="round">
      <line x1="26" y1="9"    x2="26" y2="6"    />
      <line x1="26" y1="35"   x2="26" y2="38"   />
      <line x1="13" y1="22"   x2="10" y2="22"   />
      <line x1="39" y1="22"   x2="42" y2="22"   />
      <line x1="17.4" y1="13.4" x2="15.3" y2="11.3" />
      <line x1="34.6" y1="30.6" x2="36.7" y2="32.7" />
      <line x1="34.6" y1="13.4" x2="36.7" y2="11.3" />
      <line x1="17.4" y1="30.6" x2="15.3" y2="32.7" />
    </g>
    <path d="M8 44c0-8 4-14 9-14 2.5 0 4.5 1.5 6 4 1-4 3-7 5-7s3.5 2 4.5 5c1.5-3 3.5-5 6-5 5 0 9 6 9 13" fill="#3498db" opacity=".8" />
    <path d="M6 44h40" stroke="#2980b9" strokeWidth="1.5" />
  </svg>
);

export const VisaIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="7" y="14" width="38" height="26" rx="4" fill="#16a085" />
    <rect x="7" y="20" width="38" height="8" fill="#1abc9c" opacity=".6" />
    <rect x="11" y="32" width="12" height="3" rx="1.5" fill="#fff" opacity=".8" />
    <rect x="27" y="32" width="6"  height="3" rx="1.5" fill="#fff" opacity=".5" />
    <rect x="27" y="36" width="10" height="2" rx="1"   fill="#fff" opacity=".4" />
    <circle cx="37" cy="17" r="5" fill="#f5a623" />
    <path d="M34.5 17l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const InsuranceIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <path d="M26 8c0 0-14 4-14 16v10l14 10 14-10V24C40 12 26 8 26 8z" fill="#3498db" />
    <path d="M26 8c0 0-14 4-14 16v10l14 10V8z" fill="#2980b9" />
    <path d="M20 26l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 36c-2 3-3 5.5-4 8h32c-1-2.5-2-5-4-8" fill="#85c1e9" />
  </svg>
);

export const EventIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="8"  y="14" width="36" height="32" rx="4" fill="#e74c3c" />
    <rect x="8"  y="22" width="36" height="24" rx="4" fill="#fff" />
    <rect x="17" y="10" width="4"  height="9"  rx="2" fill="#c0392b" />
    <rect x="31" y="10" width="4"  height="9"  rx="2" fill="#c0392b" />
    <rect x="13" y="27" width="5"  height="5"  rx="1" fill="#e74c3c" />
    <rect x="21" y="27" width="5"  height="5"  rx="1" fill="#e74c3c" opacity=".5" />
    <rect x="29" y="27" width="5"  height="5"  rx="1" fill="#e74c3c" opacity=".5" />
    <rect x="37" y="27" width="4"  height="5"  rx="1" fill="#e74c3c" opacity=".3" />
    <rect x="13" y="35" width="5"  height="5"  rx="1" fill="#e74c3c" opacity=".5" />
    <rect x="21" y="35" width="5"  height="5"  rx="1" fill="#e74c3c" opacity=".5" />
    <rect x="29" y="35" width="5"  height="5"  rx="1" fill="#e74c3c" opacity=".3" />
  </svg>
);

export const CourierIcon = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="8"  y="20" width="26" height="22" rx="2" fill="#d35400" />
    <rect x="8"  y="20" width="26" height="10" rx="2" fill="#e67e22" />
    <path d="M17 20v10" stroke="#fff" strokeWidth="1.5" strokeDasharray="2 1.5" />
    <path d="M14 25h6"  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="34" y="16" width="10" height="18" rx="2" fill="#2980b9" />
    <path d="M34 24h10" stroke="#fff" strokeWidth="1.2" />
    <circle cx="14" cy="44" r="4" fill="#7f8c8d" />
    <circle cx="28" cy="44" r="4" fill="#7f8c8d" />
    <circle cx="14" cy="44" r="2" fill="#ecf0f1" />
    <circle cx="28" cy="44" r="2" fill="#ecf0f1" />
  </svg>
);
