let form = document.forms["form"];
let submit = document.getElementById("submit");
let array = JSON.parse(localStorage.getItem("todolist"))||[];
submit.addEventListener("click", function(event){
    event.preventDefault();
    let task_name = form.name.value;  
    let description = form.description.value;
    let start_date = form.start_date.value;
    let end_date = form.end_date.value;
    let priority = form.priority.value;
    let obj = {
        task_name: task_name,
        description: description,
        start_date: start_date,
        end_date: end_date,
        priority: priority,
        add: "add"
   }   
   array.push(obj);
   localStorage.setItem("todolist", JSON.stringify(array));
   window.location.href = "Dashboard.html";
 
  
  
})
