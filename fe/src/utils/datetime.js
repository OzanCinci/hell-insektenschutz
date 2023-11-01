export function convertDate(date){
    if (!date) return;

    // Format the date into a human-readable string
    try {
        const parsedDate = new Date(date);
        const options = {
            timeZone: 'Europe/Berlin',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          };
        const formattedDate = new Intl.DateTimeFormat('de-DE', options).format(parsedDate);
        return formattedDate;
    } catch(e){
        return date;
    }
}