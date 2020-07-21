/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hours) {
    let time = parseInt(hours);
    if(time < 12 ) {
      return 'Good Morning';
    } else if(time >= 12 && time <= 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById('greeting').innerHTML = msg;
}



