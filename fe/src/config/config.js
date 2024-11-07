/*
// Create the date in UTC for the last day of November 2024 at 22:59 UTC
// to match 23:59 in German time (CET), Month is 0-based, so 10 = November
const date = new Date(Date.UTC(2024, 10, 30, 22, 59));
const options = { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
const germanTime = new Intl.DateTimeFormat('de-DE', options).format(date);

//console.log("Exact Date:", date);
//console.log("Formatted German Time:", germanTime); // Should display 30.11.2024, 23:59 in German time


const discount = {
    enableDiscount : true,
    percentage: 0.2,
    dealerPercentage: 0.4,
    validUntil: new Date(Date.UTC(2024, 10, 30, 22, 59)), // the last day of November 2024 at 22:59 UTC
    text: "1. November - 30. November",
};

const CONFIGURATION = {
    discount,
}

export default CONFIGURATION;

 */