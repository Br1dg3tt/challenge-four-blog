const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

 
  const entry = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  localStorage.setItem('entry', JSON.stringify(entry));
});