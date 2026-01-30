const textarea = document.getElementById("message");
const counter = document.getElementById("count");

const maxLength = textarea.maxLength;

textarea.addEventListener("input" , () => {
    const length = textarea.value.length;
    counter.textContent = length;

    if(length >= maxLength){
        textarea.classList.add("limit");
    }else {
        textarea.classList.remove("limit");
    }
})