function imagechange() {
    var Image_Id = document.getElementById("getImage");
    if (Image_Id.src.match("img/laptop.jpg")) {
        Image_Id.src = "img/web.jpeg";
    } else {
        Image_Id.src = "img/laptop.jpg";
    }
}


const text  = document.querySelector('.mainText');

const mainContainer  = document.querySelector('.container');

mainContainer.addEventListener("mousemove", runEvent);
//event handler
function runEvent(e){
    e.preventDefault();

    //print vlue of the mouse on move on the container: 
    text.textContent = `Mouse-moveX: ${e.offsetX},  Mouse-moveY: ${e.offsetY}`;
    //change body background color taking the coordinates as values of rgb:
//    document.body.style.backgroundColor = `rgb(${e.offsetX}, 360, ${e.offsetY})`;
}



var colors = [
    '#7b7554',
    '#17183b',
    '#a11692',
    '#ff4f79',
    '#ffb49a'
  ];
  // a variable for the current color index
  var currentColor = 0;
  
  /* add an event listener to the container - Every time
   click in the container, we execute the click function */

//  mainContainer.addEventListener('click', click);
  
  //  click function
  function click() {
    /*if the current color is the last object
     in the array. If it is,  set the value back to 0 (the
     first color in the array. Otherwise, increment the
     current color by 1. */
    if (currentColor == colors.length-1) currentColor = 0;
    else currentColor++; 
    /* set the body's style for backgroundColor to the
     new color. */
    document.body.style.backgroundColor = colors[currentColor];
  }
  
  /*  window has finished loading, update the body to 
   the first color */
  window.onload = function() {
    document.body.style.backgroundColor = colors[currentColor];
  }
  

 

var spot = document.getElementById('overLight');
mainContainer.addEventListener('mousemove', (e) => {
  
    spot.style.transform = `translateY(${e.clientY - 25}px)`;
    spot.style.transform += `translateX(${e.clientX - 25}px)`;
    spot.style.opacity = 1;}
, false);

spot.addEventListener('click', click);

// var button = document.getElementById('btn');
// button.addEventListener('mouseover', click);