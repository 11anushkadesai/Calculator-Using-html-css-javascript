	// Function that display value 
    function dis(val) { 
        document.getElementById("result").value += val 
    } 


    // Function that evaluates the digit and return result 
    function solve() { 
        let x = document.getElementById("result").value 
        let y = eval(x)
        document.getElementById("result").value = y 
    } 

    // Function that clear the display 
    function clr() { 
        document.getElementById("result").value = "" 
    } 
   