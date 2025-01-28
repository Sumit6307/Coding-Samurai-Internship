let currentDisplay = ""

document.querySelector("#display").value=currentDisplay

let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{

        if(e.target.innerHTML=="=")
        {
            currentDisplay = eval(currentDisplay)
            document.querySelector("#display").value = currentDisplay
        }
        else if(e.target.innerHTML=="C")
        {
            currentDisplay = ""
            document.querySelector("#display").value = currentDisplay
        }
        else
        {
            currentDisplay = currentDisplay + e.target.innerHTML

            document.querySelector("#display").value = currentDisplay

        }
       
    })
})