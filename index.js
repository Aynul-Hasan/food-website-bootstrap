const scrollBtn= document.getElementById('scrl');


window.onscroll = ()=> {scrollFunction()};

const scrollFunction=()=> {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction=()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

