// Single pricing source (PRD FR-14) — packages page, booking steps + summaries all import this.
// Rates per Shiva's rate card (Nov 2026), minus 1 for charm pricing. No advance amounts given — adv optional.
export interface Pkg {
  id: string; cat: 'weddings' | 'events' | 'personal' | 'brand';
  name: string; price: number; adv?: number; custom?: boolean; hot?: boolean;
  blurb: string; feats: string[];
}
export const GST = 0.18;
export const PRICING: Pkg[] = [
  { id: 'wed3', cat: 'weddings', hot: true, name: 'Wedding — 3 Reels', price: 7999, blurb: '3 reels · wedding day', feats: ['3 edited reels', 'Wedding-day shoot', 'Delivered on WhatsApp'] },
  { id: 'wed5', cat: 'weddings', name: 'Wedding — 5 Reels', price: 11999, blurb: '5 reels · wedding day', feats: ['5 edited reels', 'Wedding-day shoot', 'Delivered on WhatsApp'] },
  { id: 'wedrc', cat: 'weddings', name: 'Wedding + Reception (3 + 2)', price: 12999, blurb: '3 wedding reels + 2 reception reels', feats: ['3 wedding reels', '2 reception reels', 'Delivered on WhatsApp'] },
  { id: 'wedall', cat: 'weddings', name: 'Complete Wedding — up to 12 Reels', price: 24999, blurb: 'Full wedding · up to 12 reels', feats: ['Up to 12 edited reels', 'Full wedding coverage', 'Delivered on WhatsApp'] },
  { id: 'prewed', cat: 'weddings', name: 'Pre-Wedding Shoot', price: 6999, blurb: 'Pre-wedding shoot · edited reels', feats: ['Pre-wedding shoot', 'Edited reels', 'Delivered on WhatsApp'] },
  { id: 'bday', cat: 'events', name: 'Birthday — 2 Reels', price: 4999, blurb: 'Birthday · 2 edited reels', feats: ['2 edited reels', 'Birthday coverage', 'Delivered on WhatsApp'] },
  { id: 'events', cat: 'events', custom: true, name: 'Events — Custom', price: 0, blurb: 'Any event — tell us the scope', feats: ['Scope set with you', 'Quote before you book'] },
  { id: 'brand', cat: 'brand', custom: true, name: 'Brand Shoots — Custom', price: 0, blurb: 'Brand content — tell us the scope', feats: ['Scope set with you', 'Quote before you book'] },
  { id: 'solo', cat: 'personal', name: 'Solo Reel — 20–25 sec', price: 999, blurb: '20–25 sec solo reel', feats: ['20–25 sec edited reel', 'Solo shoot', 'Delivered on WhatsApp'] },
  { id: 'solop', cat: 'personal', name: 'Solo Premium Reel', price: 1499, blurb: 'Premium solo reel', feats: ['Premium solo reel', 'Edited', 'Delivered on WhatsApp'] },
  { id: 'solopp', cat: 'personal', name: 'Solo Premium Reel + Photos', price: 1999, blurb: 'Premium solo reel + photos', feats: ['Premium solo reel', 'Edited photos included', 'Delivered on WhatsApp'] },
  { id: 'couple', cat: 'personal', name: 'Couple Reel', price: 1999, blurb: 'Couple reel', feats: ['Couple reel', 'Edited', 'Delivered on WhatsApp'] },
  { id: 'couplep', cat: 'personal', name: 'Premium Couple Reel + Photos', price: 2999, blurb: 'Premium couple reel + photos', feats: ['Premium couple reel', 'Edited photos included', 'Delivered on WhatsApp'] },
  { id: 'bike', cat: 'personal', name: 'Bike Reel', price: 1499, blurb: 'Bike reel', feats: ['Bike reel', 'Edited', 'Delivered on WhatsApp'] },
  { id: 'car', cat: 'personal', name: 'Car Reel', price: 1999, blurb: 'Car reel', feats: ['Car reel', 'Edited', 'Delivered on WhatsApp'] },
];
export const inr = (n: number) => 'Rs. ' + Number(n).toLocaleString('en-IN');
export const WA_NUMBER = '919182667127'; // owner bookings number
