const noButton =document.querySelector("#noButton")
const message = document.querySelector("#message")
const yesButton = document.querySelector("#yesButton")
const question = document.querySelector("#question")
const datePicker = document.querySelector("#datePicker")
const date = document.querySelector("#date")
const timePicker = document.querySelector("#timePicker")
const time = document.querySelector("#timePicker")
const confirButton= document.querySelector("#confirmButton")
noButton.addEventListener("mouseenter", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth)
  
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight)
  noButton.style.position = "fixed"
  noButton.style.left= randomX + "px"
  noButton.style.top= randomY + "px"
  message.textContent= "Wait why not 🥺"
});

yesButton.addEventListener("click", () => {
  question.textContent=" I knew you'd say yes 😍"
  noButton.style.display ="none"
  date.textContent= "Now pick what day works for you!!!! 🤵🏻‍♂️"
  message.style.display= "none"
  yesButton.style.display = "none"
  datePicker.classList.remove("hidden")
  time.classList.remove("hidden")
  confirButton.classList.remove("hidden")

})

confirButton.addEventListener("click", () => {
  const selectedDate = datePicker.value;
  const selectedTime = time.value;

  if(!selectedDate || !selectedTime){
    alert ("You have to pick a date and time ❤️");
    return
  }
  const formattedDate = new Date(selectedDate + "T00:00:00");

  const prettyDate = formattedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  
  const formattedTime = new Date(`2000-01-01T${selectedTime}`);

const prettyTime = formattedTime.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit"
});
  date.textContent=`our date is ${prettyDate} at ${prettyTime}`
  question.textContent= "IT'S A DATE 💕"
  datePicker.style.display= "none"
  confirButton.style.display= "none"
  time.style.display= "none"
  

})

