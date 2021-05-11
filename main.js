const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function ()
{
  let offset = window.pageYOffset;
  // console.log('Offset: ' + offset);
  // console.log('offset * 0.7' + offset * 0.7)
  parallax.style.backgroundPositionY = offset * 0.1 + "px";
})

const parallax2 = document.getElementById
("parallax2");

window.addEventListener("scroll", function ()
{
  let offset = window.pageYOffset;
  // console.log('Offset: ' + offset);
  // console.log('offset * 0.7' + offset * 0.7)
  parallax2.style.backgroundPositionY = offset * 0.3 + "px";
})
