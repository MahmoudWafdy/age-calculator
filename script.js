
const inputElements = document.querySelectorAll(".card__input")
const submitButton = document.querySelector(".card__button")

const dayValidation= (day)=>{
    if(day && day > 0 && day <= 31 ){
        return true;
    }
}
const monthValidation= (month)=>{
    if(month && month > 0 && month <= 12 ){
        return true;
    }
}
const yearValidation= (year)=>{
    const currentYear = new Date().getFullYear();
    if(year && year > 0 && year <= currentYear ){
        return true;
    }
}
const isDateValid = (dayEllement,monthEllement,yearEllement) =>{
    let isValid = [false,false,false];

    if(!dayValidation(dayEllement.value)){
        dayEllement.classList.add("card__input--error");
    } else {
        isValid[0] = true;
        dayEllement.classList.remove("card__input--error");
    }
    
    if(!monthValidation(monthEllement.value)){
        monthEllement.classList.add("card__input--error");
    } else {
        isValid[1] = true;
        monthEllement.classList.remove("card__input--error");
    }

    if(!yearValidation(yearEllement.value)){
        yearEllement.classList.add("card__input--error");
    } else {
        isValid[2] = true;
        yearEllement.classList.remove("card__input--error");
    }
    return isValid.every((item) => item === true);
} 
const calculateAge = (year,month,day)=>{
    const today = new Date();
    const birthDate = new Date(year,month - 1,day );
    let age = today.getFullYear() - birthDate.getFullYear();
    const difMonth =birthDate.getMonth() - today.getMonth();
    if(difMonth > 0 || (difMonth === 0 && birthDate.getDate() > today.getDate())){
        age--;
    }
    return age;
} 
const onClickHandler = ()=>{
    const yearEllement = document.querySelector(".card__input[name='year']");
    const dayEllement = document.querySelector(".card__input[name='day']");
    const monthEllement = document.querySelector(".card__input[name='month']");
    const resultEllement = document.querySelector(".card__resultValue");
debugger;
    if(!isDateValid(dayEllement,monthEllement,yearEllement)) {
        resultEllement.textContent = "--";
        return;
    }  
    resultEllement.textContent = calculateAge(yearEllement.value,monthEllement.value,dayEllement.value);
   
}
inputElements.forEach((item) => {
    item.addEventListener("keydown", event =>{
        event.key === "Enter" && onClickHandler();
    })
})
submitButton.addEventListener("click",onClickHandler)