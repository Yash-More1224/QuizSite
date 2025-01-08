const submit = document.getElementById("submit");
const inp = document.getElementById("name");
inp.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        const ip = document.getElementById("name").value;
        localStorage.setItem('name', ip);
        window.location.href = "http://127.0.0.1:5500/maths.html"
    }
})
submit.addEventListener("click", function(){
    // alert("b clicked");
    const subj = document.getElementById("dropdown").value;
    if (subj === "Maths"){
        const ip = document.getElementById("name").value;
        localStorage.setItem('name', ip);
        window.location.href = "http://127.0.0.1:5500/maths.html"
        

    } else if (subj === "Chemistry") {
        window.location.href = "http://127.0.0.1:5500/chemistry.html"
    } else {
        window.location.href = "http://127.0.0.1:5500/physics.html"
    } 
}) 


const para = document.getElementById("para");
const bb = document.getElementById("bb");
bb.addEventListener("click",function(){
    const ip = document.getElementById("name").value;
    para.innerHTML = ip;
})
