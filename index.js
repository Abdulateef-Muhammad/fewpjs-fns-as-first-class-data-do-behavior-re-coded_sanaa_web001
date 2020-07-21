/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function gree(hours) {
    let time = hours.toInt
    if(hours < 12 ) {
      return 'Goood Morning';
    } else if(hours >= 12 && hours <= 17) {
      return 'Good Afternooon';
    } else {
      return 'Good Evening';
    }
}

/* Write your implementation of displayMessage() */




