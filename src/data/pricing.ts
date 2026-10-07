// Single pricing source (PRD FR-14) — packages page, booking steps + summaries all import this.
export interface Pkg {
  id: string; cat: 'weddings' | 'events';
  name: string; price: number; adv: number; per?: string; custom?: boolean; hot?: boolean;
  blurb: string; feats: string[];
}
export const GST = 0.18;
export const PRICING: Pkg[] = [
  { id: 'quick', cat: 'events', name: 'Quick Reel — Events', price: 1499, adv: 499, blurb: '1 hour · 1 edited reel · 3 photos · same-day', feats: ['1 hour coverage', '1 edited vertical reel', '3 edited photos', 'Same-day delivery', 'WhatsApp delivery'] },
  { id: 'half', cat: 'events', name: 'Half Day — Events', price: 4999, adv: 1099, blurb: 'Up to 3 hrs · 2 reels · 10 photos · same-day', feats: ['Up to 3 hours', '2 edited reels', '10 edited photos', 'Same-day delivery', '1 revision'] },
  { id: 'wed1', cat: 'weddings', hot: true, name: 'Wedding — Single Event', price: 9999, adv: 2499, blurb: '3 reels · raw footage · before event ends', feats: ['3 cinematic reels', 'Raw footage included FREE', 'Edited on-site', 'Delivered before event ends', '1 revision per reel'] }
];
export const inr = (n: number) => 'Rs. ' + Number(n).toLocaleString('en-IN');
export const WA_NUMBER = '919182667127'; // owner bookings number
