const url = 'http://jsonplaceholder.typicode.com/posts';

const request = (method, url, async) => {
// create a new instamce
const httpRequest = new XMLHttpRequest();

// error check
if (!httpRequest) {
  console.log('Error, cannot create request!');
  return false;
}

// handling the response

httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === httpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(`Error: problem with the request - status code: ${httpRequest.status}`)
    }
  }
}

//     open request
httpRequest.open(method, url, async);
httpRequest.send();
}

request('GET', url, true)