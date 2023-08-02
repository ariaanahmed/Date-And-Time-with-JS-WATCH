const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');


const formatTime = (date) => {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const isAM = date.getHours() < 12;
    
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
}

const formatDate = (date) => {
    const theDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const theMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()}-${theMonths[date.getMonth()]}-${date.getFullYear()}, ${theDays[date.getDay()]}`
}

setInterval(() => {
    const theDATES = new Date();

    timeElement.textContent = formatTime(theDATES);
    dateElement.textContent = formatDate(theDATES);

}, 200)