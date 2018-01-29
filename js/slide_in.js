window.onwheel = wheelslide;


// window scroll function
function wheelslide(e) {
  var moveFirst = document.getElementById('start_img');
  var moveSecond = document.getElementById('move');
  var moveFirstText = document.getElementById('first-text');
  var moveSecondText = document.getElementById('second-text');


  // scrolling downward first image
  if (e.deltaY > 0) {
    if (moveFirst.style.left == '1000px' || moveFirst.style.left == '') moveFirst.style.left = '2000px';
  } else {
    if (moveFirst.style.left == '2000px') moveFirst.style.left = '1000px';
  }

  //second img
  if (e.deltaY > 0) {
    if (moveSecond.style.left == '2000px' || moveSecond.style.left == '') moveSecond.style.left = '1000px';
  } else {
    if (moveSecond.style.left == '1000px') moveSecond.style.left = '2000px';
  }




  // first text 
  if (e.deltaY > 0) {
    if (moveFirstText.style.left == '50px' || moveFirstText.style.left == '') moveFirstText.style.left = '-2000px';
  } else {
    if (moveFirstText.style.left == '-2000px') moveFirstText.style.left = '50px';
  }


//second text

if (e.deltaY > 0) {
  if (moveSecondText.style.left == '-2000px' || moveSecondText.style.left == '') moveSecondText.style.left = '50px';
} else {
  if (moveSecondText.style.left == '50px') moveSecondText.style.left = '-2000px';
}
}
