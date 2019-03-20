
const request = (options, cb) => {
  $.ajax(options)
    .done((response) => {
      cb(response);
    })
    .fail((error) => {
      console.log(error);
    })
    .always(() => {
      console.log('request completed')
    })
}

const renderArticle = (articlesArr) => {
  console.log(articlesArr);
  for (const article of articlesArr) {
    const newArticle = creatArticle(article);
    $('#articles').append(newArticle);
  }
}

const creatArticle = (article) => {
//   return (
//   `<div class="post-preview" data-article-id="${article.id}">
//   <a href="#">
//       <h2 class="post-title">
//           ${article.title}
//       </h2>
//       <h3 class="post-subtitle">
//         ${article.body}
//       </h3>
//   </a>
//   <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
// </div>
// <hr>`
//   )

  const $articleDiv = $('<div>').addClass('post-preview').attr('data-article-id',article.id);

  const $link = $('<a>').attr('href', '#');

  $('<h2>').addClass('post-title').text(article.title).appendTo($link);

  $('<h3>').addClass('post-subtitle').text(article.body).appendTo($link);

  $link.appendTo($articleDiv);

  $('<p>').addClass('post-meta').html(
    'Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>'
  ).appendTo($articleDiv);
  $('<hr>').appendTo($articleDiv);

  return $articleDiv;

}

const loadArticles = url => {
  const options = {
    url: url,
    method: 'GET',
    dataType: 'json'
  }
  
  request(options, function(response) {
    renderArticle(response)
  });
}


$(document).ready(function(){
  const url = 'http://jsonplaceholder.typicode.com/posts';

  $('#load-more').on('click', function(event) {

    loadArticles(url);

  });


}); // document ready