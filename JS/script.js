let pls = document.getElementById('pls');
let inp = document.getElementById('inp');

let dataTask;
if(localStorage.task != null) {
    dataTask = JSON.parse(localStorage.task)
}
else {
    dataTask = [];
}

pls.onclick = function() {
    if (inp.value != '') {
        let newtask = {
            inp:inp.value,
        }
        dataTask.push(newtask);
        localStorage.setItem('task',JSON.stringify(dataTask));
        clearData();
        showData();
    }
   
}
//clear data 
function clearData() {
    inp.value = '';
}
//read
function showData() {
    let row = '';
    for(let i = 0 ; i < dataTask.length ; i++) {
        row += `
        <tr>
            <td class="no">${i+1}</td>
            <td onclick="update(${i})">${dataTask[i].inp}</td>
            <td class="delete" onclick="deleteData(${i})"><span class="material-symbols-outlined">
            done
            </span></td>
            <td class="delete2" onclick="deleterow(${i})"><span class="material-symbols-outlined">
            delete
            </span>
            </td>
        </tr>
        `;
    }
    document.getElementById('tbody').innerHTML = row;
    let delAll = document.getElementById('delete-all');
    if(dataTask.length > 0) {
        delAll.style.display = "block";
    }
    else {
        delAll.style.display = "none";
    }
}
{/* <td><button id="delete" onclick="deleteData(${i})">done</button></td> */}

showData()
// delete
let del = document.getElementsByClassName('delete');
function deleteData(i) {
    // dataTask.splice(i,1);
    // localStorage.task = JSON.stringify(dataTask);
    
    del[i].parentNode.style.textDecoration = "line-through";
    del[i].parentNode.style.backgroundColor = "rgb(228, 76, 0)";    
    // showData();
} 
//delete all
function deleteAll() {
    localStorage.clear();
    dataTask.splice(0);
    showData();
}
//delete row  
function deleterow(i) {
    dataTask.splice(i,1);
    localStorage.task = JSON.stringify(dataTask);
    showData();
}
function update(i) {
    let updata = window.prompt("Update " + dataTask[i].inp + " to:");
    dataTask[i].inp = updata;
    showData()
}
