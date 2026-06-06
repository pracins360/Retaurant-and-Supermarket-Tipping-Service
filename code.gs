// code.gs - Google Apps Script for Sentoo Tipping System
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("tips");
    
    if (!sheet) {
      sheet = ss.insertSheet("tips");
    }
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Date", "Worker", "Amount", "Description", 
        "Fee %", "Sentoo Status", "Payout Status", "User ID", "Timestamp"
      ]);
    }
    
    sheet.appendRow([
      new Date(),
      data.worker,
      data.amount,
      data.description,
      data.feePercent || 3,
      "Pending Sentoo",
      "Not Paid Out",
      data.userId || "",
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
