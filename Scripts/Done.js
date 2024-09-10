let table = document.querySelector('tbody');
    
let row = table.getElementsByTagName("tr");
 window.addEventListener("load", function(){
     let data_list = JSON.parse(localStorage.getItem("done"))||[];
    
     
     console.log(data_list)
     let num = -1;
     for(let i = 0; i<data_list.length; i++){
         num++;
         let row = document.createElement("tr");
     
         let name = document.createElement("td");
         let desc = document.createElement("td");
         let start_date = document.createElement("td");
         let end_date = document.createElement("td");
         let priority = document.createElement("td");
         let add = document.createElement("td");
         
         name.innerText = data_list[i].task_name;
         desc.innerText = data_list[i].description;
         start_date.innerText = data_list[i].start_date;
         end_date.innerText = data_list[i].end_date;
         priority.innerText = data_list[i].priority;
         add.innerText = data_list[i].done;
         
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
 })
