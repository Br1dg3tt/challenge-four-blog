var blogContainer = document.querySelector('.blog-entry');
function renderEntry() {

  const newEntry = JSON.parse(localStorage.getItem('entry')); // array of objects 
  // Loop through the entries and utilize create and append to create and append some html elements to the page

  for (let index = 0; index < newEntry.length; index++) {
    // Create some html elements to display our content
    const entry = newEntry[index];

    const entryDiv = document.createElement('div');
    const entryHeading = document.createElement('h2');
    // Create some elements for the username and the content

    entryHeading.textContent = entry.title;
    // Add the text for the username and content elements

    entryDiv.append(entryHeading);
    // append the username and content elements to the entry div

    blogContainer.append(entryDiv); // Appends the overall div (entryDiv) to our existing HTML
  }

}

renderEntry();