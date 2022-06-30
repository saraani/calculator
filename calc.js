//1. display number in text box
function displayNum(num){  //vie (num) OR displayNum(num)  // one argument
result.value+=num  // 111   222   333   etc .  => concantination  // to get more than one single digit
}

//2. clear text box => to make text box empty => AC

function clearBox(){ //No arguments
    result.value=""   // empty string ""
}

//3. evaluate expression

function evaluateExpr(){
    // expr= result.value
    //output = eval(expr)
    //result.value = output
    //     OR
    result.value = eval(result.value)  // this single step is enough

}

//4. remove last item from text box

function removeItem(){
    curexpr = result.value
    result.value = curexpr.slice(0,-1)
}
