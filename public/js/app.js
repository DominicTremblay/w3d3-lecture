$(document).ready(function() {
  const ROOT_URL = 'http://jsonplaceholder.typicode.com';

  const createArticle = article => {
    return `<div class="post-preview" data-article-id="${article.id}">
        <a href="#">
          <h2 class="post-title">${article.title}</h2>
          <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
        </a>
        <p>${article.body}</p>
        <p class="post-meta">
          Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
    </p>
      </div>
        <hr />`;

    // const $div = $('<div>')
    //   .addClass('post-preview')
    //   .attr('data-article-id', article.id);
    // const $link = $('<a>').attr('href', '#');
    // $('<h2>')
    //   .addClass('post-title')
    //   .text(article.title)
    //   .appendTo($link);
    // $('<h3>')
    //   .addClass('post-subtitle')
    //   .text('Problems look mighty small from 150 miles up')
    //   .appendTo($link);

    // $div.append($link);
    // $('<p>')
    //   .addClass('post-meta')
    //   .html('Posted by <a href="#">Start Bootstrap</a> on January 22, 2019')
    //   .appendTo($div);
    // $('<hr>').appendTo($div);

    return $div;
  };

  // Loop through all the articles
  const renderArticles = articles => {
    const $outputDiv = $('#articles');
    for (const article of articles) {
      $outputDiv.append(createArticle(article));
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
