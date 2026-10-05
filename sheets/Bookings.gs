/*** ReelsZen → Google Sheet logger. (Apps Script, free, no server.)
 * SETUP (5 min, owner's Google account):
 * 1. Create a Sheet named "ReelsZen Bookings".
 * 2. Extensions → Apps Script → delete placeholder → paste this file → Save.
 * 3. Deploy → New deployment → type "Web app" → Execute as "Me",
 *    "Who has access" → "Anyone" → Deploy → copy the /exec URL.
 * 4. Paste that URL as SHEET_URL in src/pages/book.astro → rebuild.
 * Test: open the /exec URL in a browser — you should see "ReelsZen logger live".
 */
const SHEET = 'Bookings';
const HEADERS = ['Request ID', 'Received At', 'Name', 'Phone', 'Occasion', 'Package', 'Price', 'Advance', 'Event Date', 'Venue', 'Notes', 'Status', 'Source'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) { sh = ss.insertSheet(SHEET); }
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#0E0D0B').setFontColor('#C9A24B');
    sh.setFrozenRows(1);
    // Status dropdown for your workflow: New → Confirmed → Advance Paid → Done
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['New', 'Confirmed', 'Advance Paid', 'Done', 'Cancelled'], true)
      .build();
    sh.getRange(2, 12, 500, 1).setDataValidation(rule);
    // Date-wise view: second tab sorted by Event Date, newest first
    let cal = ss.getSheetByName('By Date');
    if (!cal) { cal = ss.insertSheet('By Date'); }
    cal.getRange('A1').setFormula(`=QUERY(${SHEET}!A:M,"select * order by I desc",1)`);
  }
  return sh;
}

function doGet() {
  return ContentService.createTextOutput('ReelsZen logger live');
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const row = [
      d.id || '', new Date(), d.name || '', d.phone || '', d.occasion || '',
      d.pkg || '', d.price || '', d.adv || '', d.date || '', d.venue || '',
      d.notes || '', 'New', d.source || 'website'
    ];
    sheet_().appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, err: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
