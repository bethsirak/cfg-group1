function rotateFunction(){
    let min = 1024;
    let max = 9999;
    let degr = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+degr+"deg)";
}

let element = document.getElementById('mainbox');
  element.classList.remove('animate');

setTimeout(function(){
  element.classList.add('animate');
  }, 5000);

let box = document.querySelector(".box");
let btn = document.getElementById("btn");
  
btn.onclick = function() {
  let deg = Math.floor(Math.random() * 10000);
  box.style.transition = "all 10s ease-out";
  box.style.transform = `rotate(${deg}deg)`;
  setTimeout(() => {
    box.style.transition = "none";
    let actualDeg = deg % 360;
    box.style.transform = `rotate(${actualDeg}deg)`;
  
    let winningSlice = getWinningSlice(actualDeg);
    if (winningSlice) {
      let winningValue = winningSlice.dataset.value;
      alert(`The spin wheel has stopped at ${winningValue}`);
    }
  }, 10000);
  };
  
  function getWinningSlice(degrees) {
    let slices = document.querySelectorAll(".box div");
    let sliceAngle = 360 / slices.length;
    let sliceIndex = Math.floor(degrees / sliceAngle);
    return slices[sliceIndex];
  }
