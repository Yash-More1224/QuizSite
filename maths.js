const myname = localStorage.getItem('name');
var greeting = "Welcome ";
greeting += myname;
greeting +="! Enjoy the Maths Quiz!";
const para = document.getElementById("para");
para.innerHTML = greeting;

const start = document.getElementById("start");
start.addEventListener("click",function(){
    var count = 0;
    var correct = 0;
    var wrong = 0;

    function dispresult(){
    const result = document.createElement("p");
    result.innerHTML = "correct: ";
    result.innerHTML += correct;
    result.innerHTML += document.createElement("br");
    result.innerHTML += "wrong: ";
    result.innerHTML += wrong;
    }
    
    function createQn() {
        const list = document.getElementById("list");
        const li = document.createElement("li");
        const no = Math.floor((Math.random()*99)+1);
        li.innerHTML = no;
        const nextele = document.createElement("br");
        li.appendChild(nextele);   
        const btn = document.createElement("input");
        btn.addEventListener("keydown",function (event){
            if (event.key === "Enter" && count<3) {
                if (btn.value === no){
                    correct += 1;
                }
                else {
                    wrong += 1;
                } 
                count += 1;
                createQn();
            } else if (event.key === "Enter" && count === 3){
                alert("count is 3");
                dispresult();
            }
        })
        li.appendChild(btn);
        list.appendChild(li);
    }
    createQn();
})