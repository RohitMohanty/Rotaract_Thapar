// Get modal element
var modal = document.getElementById('simpleModal');
var modal1 = document.getElementById('simpleModal1');
var modal2 = document.getElementById('simpleModal2');
var modal3 = document.getElementById('simpleModal3');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');

// Get close button
var closeBtn = document.getElementById('closeBtn');
var closeBtn1 = document.getElementById('closeBtn1');
var closeBtn2 = document.getElementById('closeBtn2');
var closeBtn3 = document.getElementById('closeBtn3');
console.log(closeBtn);

// Listen for open click
modalBtn.addEventListener('click', openModal);
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);

// Listen for close click
closeBtn.addEventListener('click', closeModal);
closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);


// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

function openModal1(){
  modal1.style.display = 'block';
}

function openModal2(){
  modal2.style.display = 'block';
}


function openModal3(){
  modal3.style.display = 'block';
}


// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

function closeModal1(){
  modal1.style.display = 'none';
}
function closeModal2(){
  modal2.style.display = 'none';
}
function closeModal3(){
  modal3.style.display = 'none';
}
