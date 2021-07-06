var winx, winy;
var mainwidth;

var prevScr = 0;
var menuHideCntr = 0;
var menuHideAllowed = true;

var scr = 0;
var winOrientation;
var neverSized = true;


var ismob, isdesk;
var iOS, isIE;

var ishome, issingle, isphotos;

var pagetitle, pageurl;
var preventPushState = false;
var replacePushState = false;

var mousemoveTimeout;
const button = document.querySelector('.contact_button');
const menu = document.querySelector('body');
const contact = document.querySelector(".contact");
if(button){
button.addEventListener('click',function(e){
   
    menu.classList.toggle("contact-open");  
    e.stopPropagation();
})
}
document.addEventListener('click', function(e) {
  var container = $("contact-inner");
  if (container.has(e.target).length === 0){
    menu.classList.remove("contact-open");
  }
  
});

const canvas = document.querySelector("canvas");
const img = document.querySelector("img");
const c = canvas.getContext("2d");

imgStroke = c.createPattern(img, "no-repeat");

imgStroke.set;

canvas.width = 512;
canvas.height = 900;

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRgbValue() {
  const red = randomIntFromRange(41, 44);
  const green = randomIntFromRange(62, 128);
  const blue = randomIntFromRange(80, 185);

  return `rgba(${red},${green},${blue},1)`;
}

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.distanceFromCenter =
    //this for 2d randomIntFromRange(50, 220);
    // this makes 3D
    { x: randomIntFromRange(0, 200), y: randomIntFromRange(0, 200) };

  this.update = () => {
    //move points over time
    const lastPoint = { x: this.x, y: this.y };
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distanceFromCenter.x;
    this.y = y + Math.sin(this.radians) * this.distanceFromCenter.y;
    this.draw(lastPoint);
  };

  this.draw = (lastPoint) => {
    c.beginPath();
    c.strokeStyle = imgStroke;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y); //prev frame
    c.lineTo(this.x, this.y); // next frame
    c.stroke();
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillStyle = this.color;
    // c.fill();
    c.closePath();
  };
}

let particles;
function init() {
  particles = [];

  for (let i = 0; i < 400; i++) {
    const radius = Math.random * 2 + 1;
    const color = randomRgbValue();
    particles.push(
      new Particle(canvas.width / 2, canvas.height / 2, radius, color)
    );
  }
}

//animate loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255, 255, 255, 1)";
  
  //below clears screen ever rerender, try commenting when clearRect, fill rect gives tails
  //c.fillStyle = imgStroke;
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
function animatetext(tag){
    var textWrapper = document.querySelector(`.${tag}`);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");   

anime.timeline({loop: false})
  .add({
    targets: `.${tag} .letter`,
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: `.${tag}`,
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}

animatetext("loader_span");
animatetext("loader_span2");
$(function(){

  initColor();

  $('.logo').mouseenter(function(){
    var t = $(this).find('[data-hover]');
    $(t).css('min-width', $(this).outerWidth());
    $(t).text($(this).attr('data-hover'));
    var x = Math.random()*(window.innerWidth - 300) + 150;
    var y = Math.random()*(window.innerHeight - 200) + 100;
    $('img.logo-image').addClass('in').css({
      'top' : y,
      'left' : x,
    });
  }).mouseleave(function(){
    var t = $(this).find('[data-hover]');
    $(t).text($(t).attr('data-orig'));
    $(t).css('min-width', '');
    $('img.logo-image').removeClass('in');
  });

});

function initColor(){
  $('.color a').click(function(e){
    e.preventDefault();
    if(!ismob){
      var c = $(this).attr('class');
    } else {
      var c = $('html').hasClass('white') ? 'black' : 'white';
    }
    window.localStorage.setItem('nickecolor', c);
    if(c=='black'){
      $('html').removeClass('white');
      $('.inTurnBlurringTextG').addClass('inTurnBlurringTextGBlack');
      $('.inTurnBlurringTextG').removeClass('inTurnBlurringTextG');
      
    } else {
      $('html').addClass('white');
      $('.inTurnBlurringTextGBlack').toggleClass('inTurnBlurringTextG');
      $('.inTurnBlurringTextGBlack').removeClass('inTurnBlurringTextGBlack');
    }
  });

  if(window.localStorage.getItem('nickecolor')){
    if(window.localStorage.getItem('nickecolor')=='white'){
      $('html').addClass('white');
    }
  }
}
let body = document.querySelector('body');
body.addEventListener('scroll', () => { 
    let scrollTop = body.scrollTop;
    console.log(scrollTop);

let headerWrapper = document.querySelector('.nudge-arr in');
console.log(headerWrapper);

if(scrollTop >= 100){
    headerWrapper.classList.add('in');
}else{    
    headerWrapper.classList.remove('in');
}
});

$('.loader').on('click', function() {
    $('html,body').animate({scrollTop:$('.main-content').offset().top+"px"},{duration:1E3});
   
  }); // end inithome


/* HELPERS */


