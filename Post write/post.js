const button1 = document.getElementById("btn-privacy");
const list1 = document.getElementById("drop-privacy");

list1.style.display = "none";

button1.addEventListener("click",(event) => {
    if(list1.style.display == "none") {
        list1.style.display = "block"; 


    }
    else{
        list1.style.display = "none";
    }
})



// tag dropdown 
const button2 = document.getElementById("btn-tag");
const list2 = document.getElementById("drop-tag");

list2.style.display = "none";

button2.addEventListener("click",(event) => {
    if(list2.style.display == "none") {
        list2.style.display = "block"; 


    }
    else{
        list2.style.display = "none";
    }
})


// Textarea sections

const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
})