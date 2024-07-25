const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');



function saveEntry() {
  const previousStorage = JSON.parse(localStorage.getItem('entry')) || [];
  // Write a conditional statement to handle if the user doesn't fill out one of the form inputs
  if (userNameInput.value.trim() === "") {
    confirm("Please enter a username!");
    return
  }
  if (titleInput.value.trim() === "") {
    confirm("Please enter a Title!");
    return
  }
  if (contentInput.value.trim() === "") {
    confirm("Please enter some content!");
    return
  }
  
  const entry = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };
  previousStorage.push(entry);

  localStorage.setItem('entry', JSON.stringify(previousStorage));
}

// function renderEntry() {

//   const newEntry = JSON.parse(localStorage.getItem('entry'));
// }
const submitForm = document.querySelector('#form');

submitForm.addEventListener('submit', function (event) {
  event.preventDefault();
  saveEntry();
  // renderEntry();
  window.location.href = 'blog.html';
});

// function init() {
//   renderEntry;
// }
// init();