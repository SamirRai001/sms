// Your existing month-year and table elements
const monthYearElement = document.getElementById('month-year');
const calendarTable = document.getElementById('calendar-table');

// Get the current date
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Define arrays for days and months
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get day, date, month, and year
const day = daysOfWeek[currentDate.getDay()];
const date = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

// Display the day and date information in the respective elements
document.getElementById("dayOutput").innerHTML = `${day}`;
document.getElementById("dateOutput").innerHTML = `${month} ${date}, ${year}`;

// Array to store events
const events = [
    { date: new Date(2023, 11, 3), event: "Football Competition" },
    { date: new Date(2023, 11, 6), event: "Exam" }
];

// Function to update the calendar
function updateCalendar() {
    // Clear the existing content of the table
    calendarTable.innerHTML = '';

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Create the table header
    const headerRow = calendarTable.createTHead().insertRow();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    daysOfWeek.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        th.classList.add("table-header-cell"); // Add a class for styling
        headerRow.appendChild(th);
    });

    let day = 1;

    for (let i = 0; i < 6; i++) {
        const row = calendarTable.insertRow();
        for (let j = 0; j < 7; j++) {
            const cell = row.insertCell();
            if ((i === 0 && j < firstDayOfMonth) || day > daysInMonth) {
                cell.innerHTML = "";
            } else {
                cell.innerHTML = day;
                cell.classList.add("date-cell"); // Add a class for styling

                // Check if the current cell represents the active day (today's date)
                const currentDate = new Date();
                if (
                    day === currentDate.getDate() &&
                    currentMonth === currentDate.getMonth() &&
                    currentYear === currentDate.getFullYear()
                ) {
                    cell.classList.add("active-day"); // Add a class for the active day
                }

                // Check if the current cell represents a Saturday
                if (j === 6) {
                    cell.classList.add("holiday"); // Add a class for Saturday (holiday)
                }

                // Check if there is an event on this day
                const eventOnThisDay = events.find(event => event.date.getDate() === day &&
                    event.date.getMonth() === currentMonth &&
                    event.date.getFullYear() === currentYear);

                if (eventOnThisDay) {
                    cell.classList.add("event-day"); // Add a class for the event day
                    cell.setAttribute("title", eventOnThisDay.event); // Add tooltip on hover
                }

                day++;
            }
        }
    }

    monthYearElement.innerHTML = new Date(currentYear, currentMonth).toLocaleString('default', {
        month: 'long',
        year: 'numeric'
    });
}

// Function to go to the previous month
function previousMonth() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) {
        currentYear--;
    }
    updateCalendar();
}

// Function to go to the next month
function nextMonth() {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) {
        currentYear++;
    }
    updateCalendar();
}

// Initial calendar update
updateCalendar();

