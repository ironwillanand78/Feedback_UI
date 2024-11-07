let unhappy = document.querySelector(".first");
let neutral = document.querySelector(".second");
let smile = document.querySelector(".third");

let container = document.querySelector(".container");
let send_review = document.querySelector(".btn");

// function created to reset the buttons to there initial state....
function resetButtons() {
    
    let buttons = [unhappy, neutral, smile];
    buttons.forEach(button => {
        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.borderRadius = "";
    });
}

function handleButtonClick(button, feedbackType) {
    
    resetButtons();

    // Style the selected button
    button.style.backgroundColor = "#8FBC8F";
    button.style.color = "white";
    button.style.borderRadius = "10px";

    // Add event listener to "Send Review" button
    send_review.addEventListener("click", () => {
        container.style.display = "none";
        let div = document.createElement("div");
        div.className = "new-div";
        
        let h1 = document.createElement("h1");
        h1.className = "new-heading";
        h1.innerText = "Thank you !";
        
        let h2 = document.createElement("h2");
        h2.className = "new-heading-2";
        h2.innerText = `Feedback: ${feedbackType}`;
        
        let para = document.createElement("p");
        para.className = "new-para";
        para.innerText = "We'll use your feedback to improve our customer support.";

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(para);
        document.body.appendChild(div);
    });
}

// function calling with the parameters as buton and the type........
unhappy.addEventListener("click", () => handleButtonClick(unhappy, "Unhappy"));
neutral.addEventListener("click", () => handleButtonClick(neutral, "Neutral"));
smile.addEventListener("click", () => handleButtonClick(smile, "Satisfied"));
