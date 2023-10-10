// function to start the scrolling text
function startScrolling() {
    // adding text
    let scrollingText = document.createElement("div");
    scrollingText.className = "scrolling-text";
    scrollingText.innerText = "Welcome to ClicKRRR";

    // adding text to button
    document.querySelector(".button-container").appendChild(scrollingText);

    
}

// trigger scrolling text when button cliked
document.querySelector(".button").addEventListener("click", startScrolling);
