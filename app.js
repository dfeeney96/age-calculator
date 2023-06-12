let monthsOfYear = [
    {month: 1, days: 31},
    {month: 2, days: 29},
    {month: 3, days: 31},
    {month: 4, days: 30},
    {month: 5, days: 31},
    {month: 6, days: 30},
    {month: 7, days: 31},
    {month: 8, days: 31},
    {month: 9, days: 31},
    {month: 10, days: 30},
    {month: 11, days: 30},
    {month: 12,days: 31}
]


const submit = document.querySelector("button");
const dayText = document.querySelector(".day .digit")
const monthText = document.querySelector(".month .digit")
const yearText = document.querySelector(".year .digit")





submit.addEventListener("click", function(){
    event.preventDefault();

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let currentDate = currentDay + (currentMonth * 30.5) + (currentYear * 365);
    
    let selectedDay = Number(document.getElementById("day").value);
    let selectedMonth = Number(document.getElementById("month").value);
    let selectedYear = Number(document.getElementById("year").value);

    let selectedDate = selectedDay + (selectedMonth * 30.5) + (selectedYear * 365);
    

    let dateDifference = currentDate - selectedDate;

    let yearDifference = Math.floor(dateDifference / 365);
    let monthDifference = Math.floor((dateDifference - (yearDifference * 365)) / 30.5);
    let dayDifference = Math.ceil(dateDifference - (yearDifference * 365) - (monthDifference* 30.5));
    

    dayText.innerText = dayDifference;
    monthText.innerText = monthDifference;
    yearText.innerText = yearDifference;
    

})
