function doPost(e) 
{ const data = JSON.parse(e.postData.contents); 
const ss = SpreadsheetApp.getActiveSpreadsheet(); let sheet = ss.getSheetByName("tips"); 
if (!sheet) { sheet = ss.insertSheet("tips"); } 
if (sheet.getLastRow() === 0) 
{ sheet.appendRow([ "date", "worker", "amount", "description", "fee_percent", "sentoo_status", "payout_status" ]); } 
sheet.appendRow([ new Date(), data.worker, data.amount, data.description, data.feePercent, "Pending Sentoo", "Not Paid Out" ]); 
return ContentService .createTextOutput(JSON.stringify({ ok: true })) .setMimeType(ContentService.MimeType.JSON); }
const USERS = {
  purcy: {
    name: "Purcy",
    title: "Waiter",
    banner: "const BANNER_URL =
"https://i.ibb.co/C3G8Q5LT/tipping-service.jpg";",
    whatsapp: "59995120536",
    activeUntil: "2026-06-17",
    backupUntil: "2026-07-01",
    links: {
      5: "SENTOO_LINK_5",
      8: "SENTOO_LINK_8",
      10: "SENTOO_LINK_10",
      12: "SENTOO_LINK_12",
      15: "SENTOO_LINK_15",
      20: "SENTOO_LINK_20",
      25: "SENTOO_LINK_25",
      30: "SENTOO_LINK_30",
      50: "SENTOO_LINK_50"
    }
  }
};
function pay(amount){
  window.location.href = SENTOO_LINKS[amount];
}
