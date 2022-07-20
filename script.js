function calc(){
    const amount = document.getElementById('amount').value;
    const time = document.getElementById('range').value;
    const answer = document.getElementById('result');
    const num = document.getElementById('num');
    let result;

    if(time == 0){
        result = amount; 
    }
    else{
        result = (amount*(1 + 0.05*time))/time;
        if(result.toString().length >= 9){ 
            result = Math.round (result)
            //result = result.toFixed(4)
        }
    }
    answer.innerText = '$ '+ result;

    if(time < 2){
        num.value = time + ' month'
    }
    else{
        num.value = time + ' months'
    }
    
}
alert("Please input amount without comma or space")
//use switch case for the rate if it is not constant