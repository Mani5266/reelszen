// Single pricing source (PRD FR-14) — packages page, booking steps + summaries all import this.
export interface Pkg {
  id: string; cat: 'weddings' | 'events' | 'signature' | 'business';
  name: string; price: number; adv: number; per?: string; custom?: boolean; hot?: boolean;
  blurb: string; feats: string[];
}
export const GST = 0.18;
export const PRICING: Pkg[] = [
  { id: 'quick', cat: 'events', name: 'Quick Reel — Events', price: 1999, adv: 699, blurb: '1 hour · 1 edited reel · 3 photos · same-day', feats: ['1 hour coverage', '1 edited vertical reel', '3 edited photos', 'Same-day delivery', 'WhatsApp delivery'] },
  { id: 'half', cat: 'events', name: 'Half Day — Events', price: 4999, adv: 1099, blurb: 'Up to 3 hrs · 2 reels · 10 photos · same-day', feats: ['Up to 3 hours', '2 edited reels', '10 edited photos', 'Same-day delivery', '1 revision'] },
  { id: 'wed1', cat: 'weddings', hot: true, name: 'Wedding — Single Event', price: 14999, adv: 3799, blurb: '3 reels · raw footage · before event ends', feats: ['3 cinematic reels', 'Raw footage included FREE', 'Edited on-site', 'Delivered before event ends', '1 revision per reel'] },
  { id: 'wed3', cat: 'weddings', name: 'Wedding — 3 Events', price: 44999, adv: 11250, blurb: '10 reels across 3 events · raw footage', feats: ['10 reels across 3 events', 'Raw footage included FREE', 'Dedicated on-site editor', 'Priority delivery each night'] },
  { id: 'wed4', cat: 'weddings', name: 'Wedding — 4 Events', price: 59999, adv: 15000, blurb: '15 reels across 4 events · raw footage', feats: ['15 reels across 4 events', 'Raw footage included FREE', 'Dedicated on-site editor', 'Priority delivery each night'] },
  { id: 'sig', cat: 'signature', hot: true, name: 'ReelsZen Signature', price: 19999, per: '/ event', adv: 4999, blurb: 'Director-led · cinematic grade · priority', feats: ['Top creator + director', 'Cinematic colour grade', 'Priority same-night delivery', 'BTS + premiere cut'] },
  { id: 'biz', cat: 'business', custom: true, name: 'Business / Brands', price: 0, adv: 0, blurb: 'Stores, launches, real estate — scoped per brief', feats: ['Scoped per brief', 'Campaign-grade vertical', 'Usage licence included', 'Contact for quote'] }
];
export const inr = (n: number) => 'Rs. ' + Number(n).toLocaleString('en-IN');
export const WA_NUMBER = '919182667127'; // owner bookings number
