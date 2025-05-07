'use strict';
const menu = document.querySelector('.js_menu');
const btn = document.querySelector('.js_btn');
const status = document.querySelector('.js_status');
const score = document.querySelector('.js_score');
let result


function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
  }

  if (getRandomNumber >= 1 && getRandomNumber <=3) {
    result = 'Rock'}
    else if (getRandomNumber >= 4 && getRandomNumber <=6) {
      result = 'Paper'}
      else if (getRandomNumber >= 7 && getRandomNumber <=9) {
        result = 'Scissors'};

btn.addEventListener('click', (ev) => {
  ev.preventDefault();
        
    const newTask = taskInput.value;
          
          //tasks[ tasks.length ] = newTask;
          tasks.push( newTask );
          //tasks.unshift( newTask );
        
          console.log(tasks);
        
          taskOl.innerHTML = tasks;
          
        

