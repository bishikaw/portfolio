let firstProject = document.getElementById('first-project');
let firstDescription = document.getElementById('first-description');
let secondProject = document.getElementById('second-project');
let secondDescription = document.getElementById('second-description');
let thirdProject = document.getElementById('third-project');
let thirdDescription = document.getElementById('third-description');

let showFirst = function() {
    firstDescription.style.display='block';
}

let showSecond = function() {
    secondDescription.style.display='block';
}

let showThird= function () {
    thirdDescription.style.display='block';
}

firstProject.addEventListener('click', showFirst);
secondProject.addEventListener('click', showSecond);
thirdProject.addEventListener('click', showThird)