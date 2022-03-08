// use if and else if
function scuberGreetingForFeet(distance){
  if(distance <= 400) {
    return "This one is on me!" // free ride if distance <= 400
  } else if(distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks." // $30 if distance > 2000 ft
  } else if(distance > 2500) {
    return "No can do." // No rides over 2500 ft
  }
}
// use ternary operator ---------- condition ? expression1 : expression2
function ternaryCheckCity(cityName) { 
  let response = (cityName === `NYC`) ? `Ok, sounds good.` : `No go.`;
  return response;
  // returns "Ok, sounds good." when city is NYC
  // should return "No go." if destination city is not NYC
}
// use switch statement
// should return "Thank you so much." if the tip is generous
// should return "Thank you." if the tip is not as generous
// should return "Bye." if anything else
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break; // break = end of a switch statement
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}