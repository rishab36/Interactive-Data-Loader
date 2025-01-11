const unsplashAccessKey = 'W2tP2p6kvsWl7bZJ_IWZ9JkGpQQzIWeFZPGLOUcRLco'; // Your Access Key

document.getElementById('getImageButton').addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;
  const output = document.getElementById('output');
  if (!searchInput) {
    output.innerHTML = "<p>Please enter a search term!</p>";
    return;
  }
  output.innerHTML = "<p>Loading...</p>";
  try {
    // Fetching images from Unsplash API
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchInput}&client_id=${unsplashAccessKey}`);
    const data = await response.json();

    if (data.results.length === 0) {
      output.innerHTML = "<p>No images found!</p>";
    } else {
      output.innerHTML = `<p>Images related to "${searchInput}":</p>`;
      data.results.forEach(image => {
        output.innerHTML += `<img src="${image.urls.small}" alt="${image.alt_description}" style="max-width: 100%; border-radius: 8px; margin-top: 10px;" />`;
      });
    }
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch images.</p>";
  }
});

// Cat API
document.getElementById('getCatButton').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    output.innerHTML = `<p>Here's a random cat:</p><img src="${data[0].url}" alt="Random Cat" style="max-width: 100%; border-radius: 8px;" />`;
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch cat image.</p>";
  }
});

// Dog API
document.getElementById('getDogButton').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    output.innerHTML = `<p>Here's a random dog:</p><img src="${data.message}" alt="Random Dog" style="max-width: 100%; border-radius: 8px;" />`;
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch dog image.</p>";
  }
});

// Joke API
document.getElementById('getJokeButton').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    output.innerHTML = `<p>Here's a random joke:</p><p><strong>${data.setup}</strong></p><p>${data.punchline}</p>`;
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch joke.</p>";
  }
});


// Wikipedia API with CORS Proxy


  


// Advice API
document.getElementById('getAdviceButton').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    output.innerHTML = `<p>Here's a random piece of advice:</p><p>"${data.slip.advice}"</p>`;
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch advice.</p>";
  }
});

// Cocktail API
document.getElementById('getCocktailButton').addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;
  const output = document.getElementById('output');
  if (!searchInput) {
    output.innerHTML = "<p>Please enter a cocktail name!</p>";
    return;
  }
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    if (!data.drinks) {
      output.innerHTML = "<p>No cocktail found!</p>";
    } else {
      const cocktail = data.drinks[0];
      output.innerHTML = `<p>Here's a cocktail recipe:</p><p><strong>${cocktail.strDrink}</strong></p><p>${cocktail.strInstructions}</p><p><strong>Ingredients:</strong></p><ul>`;
      for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`]) {
          output.innerHTML += `<li>${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}</li>`;
        }
      }
      output.innerHTML += "</ul>";
    }
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch cocktail recipe.</p>";
  }
});

// Urban Dictionary API
document.getElementById('getUrbanDictionaryButton').addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;
  const output = document.getElementById('output');
  if (!searchInput) {
    output.innerHTML = "<p>Please enter a slang word!</p>";
    return;
  }
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${searchInput}`);
    const data = await response.json();
    if (data.list.length === 0) {
      output.innerHTML = "<p>No definition found!</p>";
    } else {
      output.innerHTML = `<p><strong>Definition:</strong></p><p>${data.list[0].definition}</p><p><strong>Example:</strong></p><p>${data.list[0].example}</p>`;
    }
  } catch (error) {
    output.innerHTML = "<p>Error: Unable to fetch urban dictionary data.</p>";
  }
});
// News API (Example: NewsAPI)
// News API (Example: NewsAPI)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getNewsButton').addEventListener('click', async () => {
      const output = document.getElementById('output');
      output.innerHTML = "<p>Loading...</p>"; // Initial loading message
      const apiKey = 'b1807205b903490080762b2e0d51eda0'; // Replace with your API key
  
      try {
        // Make the API request to NewsAPI for top headlines from the US
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  
        // If the request was successful
        if (response.ok) {
          const data = await response.json();
  
          if (data.articles.length === 0) {
            output.innerHTML = "<p>No news articles found!</p>";
          } else {
            output.innerHTML = `<p>Latest News:</p>`;
            
            // Loop through the articles and display them with animation
            data.articles.forEach((article, index) => {
              // Create a new div for each article
              const articleDiv = document.createElement('div');
              articleDiv.classList.add('news-article');
              articleDiv.style.animationDelay = `${index * 0.2}s`; // Stagger the animation
              
              // Add article content
              articleDiv.innerHTML = `
                <p><strong>${article.title}</strong></p>
                <p>${article.description}</p>
                <p><a href="${article.url}" target="_blank">Read more</a></p>
                <hr>
              `;
              
              // Append the article to the output
              output.appendChild(articleDiv);
            });
          }
        } else {
          // Handle errors with API request (invalid API key, etc.)
          throw new Error('Failed to fetch news data');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        output.innerHTML = "<p>Error: Unable to fetch news data.</p>";
      }
    });
  });
  // Save the current page to localStorage
if (!localStorage.getItem('previousPage')) {
  localStorage.setItem('previousPage', window.location.href);
}

// Mobile Back Button
document.getElementById('mobileBackButton').addEventListener('click', () => {
  const previousPage = localStorage.getItem('previousPage');

  if (previousPage) {
    window.location.href = previousPage; // Redirect to previous page
  } else {
    window.location.href = '/'; // Default fallback page
  }
});

  
  
  