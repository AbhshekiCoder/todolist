let table = document.querySelector('tbody');
    
let row = table.getElementsByTagName("tr");
let array = JSON.parse(localStorage.getItem("priority")) || [];
let data_list = JSON.parse(localStorage.getItem("todolist"));
function load(arr){
   console.log(arr)
    document.getElementById("task-count").innerHTML = arr.length ;
 
    let num = -1;
    for(let i = 0; i<arr.length; i++){
        num++;
        let row = document.createElement("tr");
    
        let name = document.createElement("td");
        let desc = document.createElement("td");
        let start_date = document.createElement("td");
        let end_date = document.createElement("td");
        let priority = document.createElement("td");
        let add = document.createElement("td");
        
        name.innerText = arr[i].task_name;
        desc.innerText = arr[i].description;
        start_date.innerText = arr[i].start_date;
        end_date.innerText = arr[i].end_date;
        priority.innerText = arr[i].priority;
        add.innerText = arr[i].add;
        
        add.setAttribute("id", num);
        add.setAttribute("class", "add");
        row.appendChild(name);
        row.appendChild(desc);
        row.appendChild(start_date);
        row.appendChild(end_date);
        row.appendChild(priority);
        row.appendChild(add);
        row.setAttribute("id", num)
        table.appendChild(row);
        
        
    }
    let add = document.getElementsByClassName("add");
console.log(add);

Array.from(add).forEach(function(element){
    let task_name, description, start_date, end_date, priority,done;
    let count;
    element.addEventListener("click", function(e){
        let row =  e.target.parentNode;
        console.log(row)
        let data = row.childNodes;
        task_name = data[0].innerText;
        description = data[1].innerText;
        start_date = data[2].innerText,
        end_date = data[3].innerText,
        priority = data[4].innerText,
        

        count = row.id;
        done = "add";
        arr.pop(count);
        console.log(data_list);
        
        let obj = {
            task_name: task_name,
            description: description,
            start_date: start_date,
            end_date: end_date,
            priority: priority,
            done: done
        }
        array.push(obj);
        console.log(array);
       
        localStorage.setItem("priority", JSON.stringify(array));
        localStorage.setItem("todolist", JSON.stringify(arr));
        row.remove();
        
      
    })

})
 }
 
    
  load(data_list);


 
 
 
 function filter(e){
    
     let filter1 = document.getElementById("filter");
     let match = false;
     let array_1 = JSON.parse(localStorage.getItem("todolist"));
     let filter = array_1.filter(element=> element.priority === filter1.value);
  
    
     if(filter1.value != "Select_Priority"){
        let row = table.getElementsByTagName("tr");
        for(let i = 0; i<row.length; i++){
           row[i].style.display = "none";
        }
        load(filter);

     }
     if(filter1.value == "default"){
        let row = table.getElementsByTagName("tr");
        for(let i = 0; i<row.length; i++){
           row[i].style.display = "none";
        }
        load(data_list);
     }
   
     
     /** 
     for(let i =1; i<row.length; i++){
         console.log(row[i])
         let cell = row[i].getElementsByTagName("td");
         console.log(cell)
        for(let j = 0; j<cell.length; j++){
          console.log(cell[j].innerText)
         if(cell[j].innerText === filter.value){
             match = true;
         }
        
        
           
     
      
     }
     if(match){
         row[i].style.display = "table-row";
     
     }
     else{
         row[i].style.display = "none";
     }
         */
 }
     
