
const userIdTextbox = document.getElementById("userIdTextbox");
const titleTextbox = document.getElementById("titleTextbox");
const completedCheckbox = document.getElementById("completedCheckbox");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

window.onload = () => {
    console.log("connected")
    submitButton.onclick = onSubmitButtonClicked;
}


function onSubmitButtonClicked() {
    //console.log("clicked")

    //post command
    let bodyData = {
        userId: userIdTextbox.value,
        title: titleTextbox.value,
        completedCheckbox: completedCheckbox.checked,
    }

    //sending request
    fetch("https://jsonplaceholder.typicode.com/todos/", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
        .then(json => {
            console.log(json);
            for (let j in json) {

                let p = document.createElement("p");
                p.innerHTML = `${j} : ${json[j]}`;
                outputDiv.appendChild(p);
            }
        }).catch(err => {
            console.log(err);
            let p = document.createElement("p");
            p.innerHTML = "Error! " + err;
            outputDiv.appendChild(p);
        })
}