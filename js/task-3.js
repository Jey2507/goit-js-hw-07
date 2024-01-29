const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

const switchName = () => {
    const newName = nameInput.value.trim();

    if (nameInput.value == 0) {
        nameOutput.textContent = "Anonymous"
    } else {
        nameOutput.textContent = newName; 
    }
       
};

nameInput.addEventListener("input", switchName)