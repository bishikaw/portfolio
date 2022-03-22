let eventTarget = document.getElementById('first-project');

function eventHandlerFunction() {
    document.querySelectorAll(".project-description").style.visbility="visible";
};

eventTarget.addEventListener('mouseover', eventHandlerFunction)

