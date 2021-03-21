// Get current day,month

function Get_Date() {
    let date = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const Day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return `${Day[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`
}

export default Get_Date;