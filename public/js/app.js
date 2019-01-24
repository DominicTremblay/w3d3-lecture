$(document).ready(function() {
  const ROOT_URL = 'http://jsonplaceholder.typicode.com';

  // Is the document ready?
  console.log('Document is loaded');

  // Loop throught the articles (array of objects),
  // create the HTML and append to the page

  const renderArticles = articles => {
    for (const article of articles) {
      const newArticle = createArticle(article);
      $('#articles').append(newArticle);
    }
  };

  // Create the HTML Element out of an article object
  const createArticle = article => {
    // return `
    // 	<div class="post-preview" data-article-id="${article.id}">
    // 			<a href="#">
    // 					<h2 class="post-title">
    // 							${article.title}
    // 					</h2>
    // 					<h3 class="post-subtitle">
    // 							Problems look mighty small from 150 miles up
    // 					</h3>
    // 			</a>
    // 			<p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
    // 	</div>
    // 	<hr>
    // `;

    // creating the div element
    // <div class="post-preview" data-article-id="${article.id}">
    // this is a selector that select existing divs in your document
    // $('div')
    const div = $('<div>')
      .addClass('post-review')
      .attr('data-article-id', article.id);

    const link = $('<a>').attr('href', '#');

    //   <h2 class="post-title">
    //       ${article.title}
    //     </h2>

    // h2 becomes a child of link which is an a tag
    $('<h2>')
      .addClass('post-title')
      .text(article.title)
      .appendTo(link);

    //     <h3 class="post-subtitle">
    //       Problems look mighty small from 150 miles up
    // 			</h3>

    $('<h3>')
      .addClass('post-subtitle')
      .text('Problems look mighty small from 150 miles up')
      .appendTo(link);

    // parent - child - adding the a href to the div
    div.append(link);
    // or child - parent
    // link.appendTo(div)

    // <p class="post-meta">
    // Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
    // </p>;

    $('<p>')
      .addClass('post-meta')
      .html('Posted by <a href = "#">Start Bootstrap</a> on September 24, 2019')
      .appendTo(div);

    return div;
  };

  // load All the articles
  const loadArticles = () => {
    // Create an Ajax request

    const options = {
      url: `${ROOT_URL}/posts`,
      method: 'GET',
      // if post, add data
      // data: {}
    };

    $.ajax(options)
      .done(articles => {
        renderArticles(articles);
      })
      .fail(err => {
        console.log('Error: ', err);
      })
      .always(() => {
        console.log('request completed');
      });
  };
  // on page load

  // load more button click listener

  $('#load-more').on('click', event => {
    event.preventDefault();
    loadArticles();
  });

  loadArticles();
});

// load a single article via AJAX `GET` request

// return an HTML element (as a string) from an article object

// create a click listener for any article preview
