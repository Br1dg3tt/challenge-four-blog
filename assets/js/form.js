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

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveEntry ();
    renderEntry();
});

    function init () {
        renderEntry;
    }
    init();