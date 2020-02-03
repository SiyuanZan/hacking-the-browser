///////////////////
///////////////////

//////////////////////////

function log(...args) {
  let message = args.join(' ');
  $('#log').prepend('--&gt; ' + message + '<br>');
}

function warn(...args) {
  log(...args);
  $('#log').addClass('warn');
}

function hideLog() {
  $('#log').hide();
}

function showLog() {
  $('#log').show();
}

function clearLog() {
  $('#log').empty();
}

window.onerror = error => {
  $('#log').addClass('error').text(`Error: ${error}`);
};

function checkSupportFor(name, propertyName, propertyOwner = window) {
  if (!(propertyName in propertyOwner)) {
    warn(`No support for ${name}`);
  } else {
    log(`Supports ${name}!`);
    return true;
  }
}

function isInIframe() {
  return window.parent !== window;
}

$(() => {
  log('Ready!');
  showLog();
  $('#clear-log').click(clearLog);
});

//////////////////
//////////////////

let batteryState = {
  level: 0,
  charging: false,
  chargingTime: Infinity,
  dischargingTime: Infinity };


function updateStateFrom(battery, state) {
  Object.keys(state).forEach(key => {
    state[key] = battery[key];
  });
  state.percentage = state.level * 100;
  displayState(state);
  displayBatteryLevel(state);
}

function displayState(state) {
  Object.keys(state).forEach(key => {
    let elementId = key;
    let value = state[key];
    $('#' + elementId).text(value);
  });
}

function displayBatteryLevel(state) {
  $('#battery-level').css({
    width: state.percentage + '%' });

}

$(() => {
  if (checkSupportFor('Battery API', 'getBattery', navigator)) {
    startWatchingBattery();
  }
});

function startWatchingBattery() {
  navigator.getBattery().then(function (battery) {
    log('Got battery');

    updateStateFrom(battery, batteryState);

    let batteryEvents = [
    'chargingchange',
    'levelchange',
    'chargingtimechange',
    'dischargingtimechange'];


    batteryEvents.forEach(function (eventName) {
      battery.addEventListener(eventName, () => {
        log('Got event: ' + eventName);
        updateStateFrom(battery, batteryState);
      });
    });
  });
}



// var a=document.getElementById("tr2").getElementsByTagName("td")[1].innerText;

/*window.onload=function(){
  

  var bp = document.querySelector('#battery');
console.log(document.getElementById("tr2").getElementsByTagName("td")[1].innerText == "true");

var bp2 = document.querySelector('#battery-level-wrapper');
var bp3 = document.querySelector('#battery-level');
var bp4 = document.querySelector('#battery-level-cap');



var img=document.querySelector('img');

function newFunction2() {
  return document.getElementById("tr2").getElementsByTagName("td")[1].innerText == "true";
}
  
document.getElementById("tr2").getElementsByTagName("td")[1].change()

function newFunction3(){
if (newFunction2()) {

  bp.style.color = "green";
  bp2.style.color = "green";
  bp2.style.backgroundColor = "green";
  bp3.style.color = 'green';
  bp3.style.backgroundColor = "green";
  bp4.style.color = 'green';
  bp4.style.backgroundColor = "green";


  img.style.display="block";  
var timer=setInterval(function(){
if(img.offsetLeft<=(document.body.clientWidth)){
img.style.left=img.offsetLeft+10+'px';
}else{
    img.style.left=0+'px';
}

},30);   
  
 }
  else{
  bp.style.color = "gray";
  bp2.style.color = "gray";
  bp2.style.backgroundColor = "gray";
  bp3.style.color = 'gray';
  bp3.style.backgroundColor = "gray";
  bp4.style.color = 'gray';
  bp4.style.backgroundColor = "gray";
 
 
 }
}
}*/


  // var Bstate=document.getElementById("tr2").getElementsByTagName("td")[1]
  
 

  $(() => navigator.getBattery().then(function(battery) {
    battery.addEventListener("chargingchange", function() {
      function newFunction2() {
        return document.getElementById("tr2").getElementsByTagName("td")[1].innerText == "true";
      }
   var bp = document.querySelector('#battery');
   var bp2 = document.querySelector('#battery-level-wrapper');
   var bp3 = document.querySelector('#battery-level');
   var bp4 = document.querySelector('#battery-level-cap');
   
   
   var img=document.querySelector('img');
   
   
   
   
   if (newFunction2()) {
   
     bp.style.color = "green";
     bp2.style.color = "green";
     bp2.style.backgroundColor = "green";
     bp3.style.color = 'green';
     bp3.style.backgroundColor = "green";
     bp4.style.color = 'green';
     bp4.style.backgroundColor = "green";
   
   
     img.style.display="block";  
   var timer=setInterval(function(){
   if(img.offsetLeft<=(document.body.clientWidth)){
   img.style.left=img.offsetLeft+10+'px';
   }else{
       img.style.left=0+'px';
   }
   
   },30);   
     
    }
     else{
     bp.style.color = "gray";
     bp2.style.color = "gray";
     bp2.style.backgroundColor = "gray";
     bp3.style.color = 'gray';
     bp3.style.backgroundColor = "gray";
     bp4.style.color = 'gray';
     bp4.style.backgroundColor = "gray";
    
     img.style.display="none"; 
     }
      
    })
  }))




 




 











