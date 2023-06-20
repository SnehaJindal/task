let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 20;

if (registeredEarly && runnerAge>18) {
  raceNumber += 1000;
}
else if(!registeredEarly && runnerAge >18){
  raceNumber += 1000;
}


if (registeredEarly && runnerAge >18) {
  console.log('Your race starts at 9:30 am, your race number is ${raceNumber}');
} else if (!registeredEarly && runnerAge >18) {
  console.log('Late adults run at 11:00 am your race number is ${raceNumber}');
}
else if (runnerAge < 18) {
  console.log('Race starts at 12:30 pm your raceNumber is ${raceNmuber}');

}
else{
  console.log('Please approach the registration desk,thank you!');
}
 