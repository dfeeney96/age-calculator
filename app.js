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

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

let selectedDay = "";
let selectedMonth = "";
let selectedYear = "";


const submit = document.querySelector("button");
const dayText = document.querySelector(".day .digit");
const monthText = document.querySelector(".month .digit");
const yearText = document.querySelector(".year .digit");

const dayWarning = document.querySelector(".day .warning-message");
const monthWarning = document.querySelector(".month .warning-message");
const yearWarning = document.querySelector(".year .warning-message");





submit.addEventListener("click", function(){
    event.preventDefault();

    selectedDay = Number(document.getElementById("day").value);
    selectedMonth = Number(document.getElementById("month").value);
    selectedYear = Number(document.getElementById("year").value);

    let maxNumberOfDays;


   monthsOfYear.forEach(function(monthOfYear) {
        if(monthOfYear.month == selectedMonth){
            maxNumberOfDays = monthOfYear.days;
           
        }
    }) 
    
    

    if(selectedDay == "" || selectedMonth == "" || selectedYear == "" || selectedDay > maxNumberOfDays || selectedMonth > 12 ||selectedYear > currentYear ){
        if(selectedDay == "" || selectedDay > maxNumberOfDays){
            
            dayWarning.innerText = "Must be a valid date";
            dayWarning.setAttribute("id", "active");
        }
        if(selectedMonth =="" || selectedMonth > 12){
            
            monthWarning.innerText = "Must be a valid month";
            monthWarning.setAttribute("id", "active");
        }
        if(selectedYear =="" || selectedYear > currentYear ){
                        
            yearWarning.setAttribute("id", "active");
            if(selectedYear > currentYear){
                yearWarning.innerText = "Must be in the past";
            } else {
                yearWarning.innerText = "Must be a valid year";
            }
        } 
    } else {
        if(dayWarning.getAttribute("id") =="active"){
            dayWarning.removeAttribute("id", "active")
        }
        if(monthWarning.getAttribute("id") =="active"){
            monthWarning.removeAttribute("id", "active")
        }
        if(yearWarning.getAttribute("id") =="active"){
            yearWarning.removeAttribute("id", "active")
        }


        let differences = calculateDifference(selectedDay, selectedMonth, selectedYear);
        let dayDifference = differences[0];
        let monthDifference = differences[1];
        let yearDifference = differences[2];
        displayDifferences(dayDifference, monthDifference, yearDifference);
    }

})



function calculateDifference(selectedDay, selectedMonth, selectedYear){

    let currentDate = currentDay + (currentMonth * 30.5) + (currentYear * 365);
    let selectedDate = selectedDay + (selectedMonth * 30.5) + (selectedYear * 365);
    

    let dateDifference = currentDate - selectedDate;

    let yearDifference = Math.floor(dateDifference / 365);
    let monthDifference = Math.floor((dateDifference - (yearDifference * 365)) / 30.5);
    let dayDifference = Math.ceil(dateDifference - (yearDifference * 365) - (monthDifference* 30.5));

    return [dayDifference, monthDifference, yearDifference];
}


function displayDifferences (dayDifference, monthDifference, yearDifference) {
    dayText.innerText = dayDifference;
    monthText.innerText = monthDifference;
    yearText.innerText = yearDifference;

}