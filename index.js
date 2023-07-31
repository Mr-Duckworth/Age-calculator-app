const values = Array.from(document.querySelectorAll(".answer-value"));
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");



function ageCalc() {
    let day = Number(dayInput.value);
    let month = Number(monthInput.value);
    let year = Number(yearInput.value);
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    const feburary = [2];
    const thirty = [4,6,9,11];
    const thirtyOne= [1,3,5,7,8,10,12]

    

    if (day == "") {
        requriedError("day");
    } else if (day < 1 || day > 31 ) {
        wrongError("day");
    }  
    if (month == "") {
        requriedError("month");
    } else if (month < 1 || month > 12 ) {
        wrongError("month"); 
    } 
    if (year == "") {
        requriedError("year");
    } else if (year > currentYear) { 
        wrongError("year");
    }

    if (year == 0) {
        yearValue = "--"
    } else if (year > currentYear) {
        yearValue = "--"
    } else {
        yearValue = currentYear - year;
    }

    if (month >= 1 && month <= 12) {
        if (currentMonth < month) {
            yearValue--;
            monthValue = (currentMonth + 12) - month;
        } else {
            monthValue = currentMonth-month;
        }
    }
    if (day >= 1 && day <= 31) {
        if(currentDay < day) {
            monthValue--;
            if (feburary.includes(monthValue) ) {
                dayvalue = (currentDay+28) - day;
            } else if (thirty.includes(monthValue)) {
                dayvalue = (currentDay+30) - day;
            } else if (thirtyOne.includes(monthValue)) {
                dayvalue = (currentDay+31) - day;
            }
        } else {
            dayvalue = currentDay-day;
        }
    }

    values[0].innerHTML = yearValue;
    values[1].innerHTML = monthValue;
    values[2].innerHTML = dayvalue;


}


function wrongError(target) {
    if (target == "day") {

        /* SHAKE ANIMATION */
        dayInput.style.border = "1px solid red";
        dayInput.classList.add("shake");
        dayInput.classList.remove("shake");
        void dayInput.offsetWidth;
        dayInput.classList.add("shake");
      
        /*SHOW ERROR */
        
        let labelError = document.querySelector(".day-label");
        let error = document.querySelector(".wrong-day-error");
        labelError.style.color = "hsl(0, 100%, 67%)";
        error.style.display = "inline-block";
      
        setTimeout(() => {
            dayInput.style.border = "1px solid hsl(0, 0%, 94%)";
            dayInput.style.transition = "border 1s linear";
            error.style.display = "none";
            labelError.style.color = "hsl(0, 1%, 44%)";
        }, 4000);
    
    } else if (target == "month") {
    
        /* SHAKE ANIMATION */
        monthInput.style.border = "1px solid red";
        monthInput.classList.add("shake");
        monthInput.classList.remove("shake");
        void monthInput.offsetWidth;
        monthInput.classList.add("shake");
      
        /*SHOW ERROR */
        
        let labelError = document.querySelector(".month-label");
        let error = document.querySelector(".wrong-month-error");
        labelError.style.color = "hsl(0, 100%, 67%)";
        error.style.display = "inline-block";
    
        setTimeout(() => {
            monthInput.style.border = "1px solid hsl(0, 0%, 94%)";
            monthInput.style.transition = "border 1s linear";
            error.style.display = "none";
            labelError.style.color = "hsl(0, 1%, 44%)";
          }, 4000);

    } else if (target == "year") {
    
        /* SHAKE ANIMATION */
        yearInput.style.border = "1px solid red";
        yearInput.classList.add("shake");
        yearInput.classList.remove("shake");
        void yearInput.offsetWidth;
        yearInput.classList.add("shake");
      
        /*SHOW ERROR */
        
        let labelError = document.querySelector(".year-label");
        let error = document.querySelector(".wrong-year-error");
        labelError.style.color = "hsl(0, 100%, 67%)";
        error.style.display = "inline-block";
    
        setTimeout(() => {
            yearInput.style.border = "1px solid hsl(0, 0%, 94%)";
            yearInput.style.transition = "border 1s linear";
            error.style.display = "none";
            labelError.style.color = "hsl(0, 1%, 44%)";
          }, 4000);
    }
}


function requriedError(target) {
    if (target == "day") {

        /* SHAKE ANIMATION */
        dayInput.style.border = "1px solid red";
        dayInput.classList.add("shake");
        dayInput.classList.remove("shake");
        void dayInput.offsetWidth;
        dayInput.classList.add("shake");
      
        /*SHOW ERROR */
        
        let labelError = document.querySelector(".day-label");
        let error = document.querySelector(".required-day-error");
        labelError.style.color = "hsl(0, 100%, 67%)";
        error.style.display = "inline-block";
      
        setTimeout(() => {
            dayInput.style.border = "1px solid hsl(0, 0%, 94%)";
            dayInput.style.transition = "border 1s linear";
            error.style.display = "none";
            labelError.style.color = "hsl(0, 1%, 44%)";
        }, 4000);
    
    } else if (target == "month") {
    
        /* SHAKE ANIMATION */
        monthInput.style.border = "1px solid red";
        monthInput.classList.add("shake");
        monthInput.classList.remove("shake");
        void monthInput.offsetWidth;
        monthInput.classList.add("shake");
      
        /*SHOW ERROR */
        
        let labelError = document.querySelector(".month-label");
        let error = document.querySelector(".required-month-error");
        labelError.style.color = "hsl(0, 100%, 67%)";
        error.style.display = "inline-block";
    
        setTimeout(() => {
            monthInput.style.border = "1px solid hsl(0, 0%, 94%)";
            monthInput.style.transition = "border 1s linear";
            error.style.display = "none";
            labelError.style.color = "hsl(0, 1%, 44%)";
          }, 4000);

    } else if (target == "year") {
    
        /* SHAKE ANIMATION */
        yearInput.style.border = "1px solid red";
        yearInput.classList.add("shake");
        yearInput.classList.remove("shake");
        void yearInput.offsetWidth;
        yearInput.classList.add("shake");
      
        /*SHOW ERROR */
        
        let labelError = document.querySelector(".year-label");
        let error = document.querySelector(".required-year-error");
        labelError.style.color = "hsl(0, 100%, 67%)";
        error.style.display = "inline-block";
    
        setTimeout(() => {
            yearInput.style.border = "1px solid hsl(0, 0%, 94%)";
            yearInput.style.transition = "border 1s linear";
            error.style.display = "none";
            labelError.style.color = "hsl(0, 1%, 44%)";
          }, 4000);
    }
}