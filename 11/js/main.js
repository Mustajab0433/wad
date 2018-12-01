//============================================
//-----------  STEP - 1 ----------------------
//============================================


var todos = [];
function add() {
    var task = document.getElementById("task").value;
    todos.push(task);
    document.getElementById('todos').innerText = todos;
}
//ANSWERE:-
//In Step 1, when we eneter the data in input box,it stores in task variable.
// and with the push command, we put data in todos array.//


//============================================
//-----------  STEP - 2 ----------------------
//============================================

//Answere:-
//Step 2: In the funtion add(),get input and push it in todos array then remove data from input box.
//at the end of this funtion, its call function show(), in this,it make a list of ul and print all array of
// todos with empty array
// at the is use .appendChild for make li to child of ul.//
var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}

function show() {
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}

//============================================
//-----------  STEP - 3 ----------------------
//============================================
//ANSWERE:-
//Step 3:In function getTodos(),its make todos array and get some data from localstorage.getitem() and JSON.parse()
// with this
 //   command save all data in array and return array.
 ////   In add function, save input data in task variable and call  function getTodos(), push data from task in array
//store data using JSON.stringify() function.
//In funution  show(), make a list of ul and make child of li.

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}


function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();



//============================================
//-----------  STEP - 4 ----------------------
//============================================
//Answere:-
// In step 4,some new function like remove() ,isDone() and add() some new thing in function show(). In function Show(), give
//  function() on click property with the help of .addEventListener.
// In remove function(), its get id of button by use getattribute() and use .splice() for remove data.
// In function isDone(e),


function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}
function change(){
    var id = this.getAttribute('id');
    var todos = getTodos();
    document.getElementById('task').innerText[id] = todos[id];
    todos.splice(id,0);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +'<button class="btn btn-primary" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Edit</span> </button>'+
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
    var buttons1 = document.getElementsByClassName('btn-primary');
    for(var j=0; j<buttons.length; j++){
        buttons1[j].addEventListener('click',change);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();




//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text



*/

