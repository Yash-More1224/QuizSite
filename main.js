const submit = document.getElementById("submit");
submit.addEventListener("click", function(){
    // alert("b clicked");
    const subj = document.getElementById("dropdown").value;
    if (subj === "Maths"){
        window.location.href = "http://127.0.0.1:5500/maths/maths.html"
    } else if (subj === "Chemistry") {
        window.location.href = "http://127.0.0.1:5500/chemistry.html"
    } else {
        window.location.href = "http://127.0.0.1:5500/physics.html"
    } 
}) 

window.name = document.getElementById("name").value;
