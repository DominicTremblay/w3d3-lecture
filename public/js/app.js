$(document).ready(function() {
  const ROOT_URL = 'http://jsonplaceholder.typicode.com';

  // Loop through all the articles
  const renderArticles = articles => {
    for (const article of articles) {
      console.log(article);
    }
  };

  // load all articles via AJAX request, then render them on page
  // gets 100 articles at a time
  const loadArticles = () => {
    const options = {
      method: 'GET',
      url: `${ROOT_URL}/posts`,
    };
    $.ajax(options)
      .done(renderArticles)
      .fail(err => console.log('Error: ', err))
      .always(() => {
        console.log('Request completed.');
      });
  };

  loadArticles();
}); // End Doc Ready
