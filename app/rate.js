function change(val) {
  let rateNum = parseInt(document.querySelector(".rate").innerHTML);
  if (rateNum + val > 5 || rateNum + val < 0) {
    return;
  }
  rateNum += val;
  document.querySelector(".rate").innerHTML = rateNum;
}

function showRateBox(e){
    toggle(document.querySelector('.rate-box'),'grid',e)
    document.querySelector(".rate").innerHTML = 0;
}

document.querySelector(".rate-button").addEventListener('click',(e)=>{
    showRateBox(e)
})

function rate(rated){
    let prevRate = parseFloat(document.querySelector(".rating-info .number").innerHTML);
    let rateNum = parseInt(document.querySelector(".rate").innerHTML);
    let newRate = ((prevRate*rated+rateNum)/(rated+1)).toFixed(2);
    document.querySelector(".rating-info .number").innerHTML = newRate
    console.log(newRate)
}