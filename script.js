'use strict';

///////////////////////////////////////
// DATA SOURCE
let projectNames = [
    {
        name: 'Baking',
        selected: false
    },
    {
        name: 'Testing',
        selected: false
    },
    {
        name: 'Drawing',
        selected: false
    },
    {
        name: 'Revisiting',
        selected: false
    },
]
///////////////////////////////////////
// VARIABLES
let selectProject = false;
///////////////////////////////////////
// DOM ELEMENTS
const projects = document.querySelector('.projects');
for (let child of projects.children) {
    child.addEventListener('click', () => {
        selectProject = !selectProject;
        selectProject 
        ? child.classList.add('active')
        : child.classList.remove('active')
    });
}

