

let getInput = document.querySelector("#todotask")
let addbtn = document.querySelector(".add")
let taskText = addbtn.innerText
let taskContainer = document.querySelector(".taskContainer")

let taskArray = JSON.parse(localStorage.getItem("todolist")) || []
let edit_id=null

displayInfo()

addbtn.addEventListener("click",(e)=>{
    e.preventDefault()

    let inputValue = getInput.value

    if(edit_id!=null)
        {
          taskArray.splice(edit_id,1,{"name":inputValue})
          edit_id=null
        }
        else
        {
            taskArray.push({"name":inputValue})
            // inputValue=""

        }
    saveInfo(taskArray)
    getInput.value=""
    // inputValue=""
    addbtn.innerText = taskText

})   


function saveInfo (taskArray)
{
   localStorage.setItem("todolist",JSON.stringify(taskArray))
   displayInfo()
}

function displayInfo()
{
    taskContainer.innerHTML=""

    taskArray.forEach((el,i)=>{

    const div = document.createElement("div")
     div.setAttribute("class","tasklist")

     let srno = document.createElement("h3")
     srno.innerText=i+1

    let h3 = document.createElement("h3")
    h3.innerText = el.name

    let editbtn = document.createElement("button")
    editbtn.setAttribute("class","edit")
    editbtn.innerText="EDIT"

    editbtn.addEventListener("click",()=>{

        edit_id=i
        getInput.value = taskArray[edit_id].name
        addbtn.innerText = "Save"
    })

    let deletebtn = document.createElement("button")
    deletebtn.setAttribute("class","deleteButton")
    deletebtn.innerText="DELETE"

    deletebtn.addEventListener("click",()=>{
        taskArray.splice(i,1)
        saveInfo(taskArray)
        // displayInfo()
    })

    div.append(srno,h3,editbtn,deletebtn)
    taskContainer.append(div)

    })

}




