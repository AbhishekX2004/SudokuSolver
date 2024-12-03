"use strict";

(function () {
  // Utility to log analytics events
  function logEvent(eventType, eventData) {
    console.log(`[Analytics Event] Type: ${eventType}, Data:`, eventData);
    // You can replace the console.log with an API call to send data to a server
  }

  // Track button clicks
  document.getElementById("solve-button").addEventListener("click", function () {
    logEvent("ButtonClick", { buttonId: "solve-button", action: "Solve Sudoku" });
  });

  document.getElementById("clear-button").addEventListener("click", function () {
    logEvent("ButtonClick", { buttonId: "clear-button", action: "Clear Board" });
  });

  // Track cell edits on the Sudoku board
  document.getElementById("sudoku-board").addEventListener("input", function (event) {
    if (event.target && event.target.nodeName === "TD") {
      logEvent("CellEdit", { cellId: event.target.cellIndex, newValue: event.target.innerText });
    }
  });

  // Track errors or invalid inputs
  document.getElementById("sudoku-board").addEventListener("keyup", function (event) {
    if (event.target && event.target.nodeName === "TD") {
      const isValid = /^[1-9]$/.test(event.target.innerText);
      if (!isValid && event.target.innerText.trim() !== "") {
        logEvent("ValidationError", { message: "Invalid input", value: event.target.innerText });
      }
    }
  });

  console.log("Analytics tracking initialized.");
})();
