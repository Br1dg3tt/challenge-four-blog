const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');


 
    function saveEntry () {
  const entry = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };
 
  localStorage.setItem('entry', JSON.stringify(entry));
}

function renderEntry () {

    const newEntry = JSON.parse(localStorage.getItem('entry'));
}
const submitForm =document.querySelector('#form');

submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    saveEntry ();
    renderEntry();
    window.location.href ='blog.html';
});

    function init () {
        renderEntry;
    }
    init();