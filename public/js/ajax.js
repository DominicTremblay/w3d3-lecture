const request = (method, url, asyc) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function() {
    // Process the server response here.

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // We can deal with the response
      console.log(httpRequest.responseText);
    }
  };

  httpRequest.open(method, url, asyc);
  httpRequest.send(null);
};

request('GET', 'http://jsonplaceholder.typicode.com/posts', true);
