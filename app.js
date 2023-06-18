
async function getGif(term) {
    try {
      const apiKey = 'LR4uRRLNHhckPw6HV8qGETDEUt6RvQFg';
      const url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}`;
      const response = await axios.get(url);
  
      console.log(response.data);
  
      // Access the URL of the first GIF in the response data
      let randomNumber = Math.floor((Math.random() * 40));
      const gifUrl = response.data.data[randomNumber].images.original.url;
  
      // Create a new image element
      const imgElement = document.createElement('img');
  
      // Set the source URL of the image
      imgElement.src = gifUrl;
  
      // Set any other attributes as needed
      imgElement.alt = 'Alternative Text';
      imgElement.width = 300;
      imgElement.height = 200;
  
      // Append the image element to the container
      const container = document.querySelector('#containerImage');
      container.appendChild(imgElement);
      document.querySelector('#term').value = '';
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Event listener for form submission
  const form = document.querySelector('#form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const term = document.querySelector('#term').value;
    getGif(term);
    
  });
  
  // Event listener for removing images
  const container = document.querySelector('#containerImage');
  const removeButton = document.querySelector('#remove');
  removeButton.addEventListener('click', function () {
    container.innerHTML = '';
    // imgElement.src="";
  });




// const searchButton = document.querySelector('#search');
// searchButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   getGif();
// });

