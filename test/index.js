

const showTime = () => {
  const hourInput = document.getElementById("inputHour");
  const minuteInput = document.getElementById("inputMinute");
  const hourValue = hourInput.value;
  const minuteValue = minuteInput.value;
  
  const minute = document.getElementById("minute");
  const hour = document.getElementById("hour");
  hour_rotation = 30 * hourValue + minuteValue / 2; //converting current time
  minute_rotation = 6 * minuteValue;

  hour.style.transform = `rotate(${hour_rotation}deg)`;
  minute.style.transform = `rotate(${minute_rotation}deg)`;
};


const HourInputEvent = ()=>{
  const hourInput = document.getElementById("inputHour");
  if(hourInput.value > 12){
    hourInput.value = 12
  }
}

const MinuteInputEvent = ()=>{
  const minuteInput = document.getElementById("inputMinute");
  if(minuteInput.value > 60){
    minuteInput.value = 60
  }
}