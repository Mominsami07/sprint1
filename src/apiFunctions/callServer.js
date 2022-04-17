const url = "http://localhost:4000/";

exports.getData = function() {
  const requestOptions = {
     method: 'get',
     headers: { 'Content-Type': 'application/json' },
 };
  return callServer(url+"/", requestOptions);
}


exports.sendContactMessage = function(formData) {
  const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
     };
  return callServer(url+"contact", requestOptions );
}


const callServer = (url, requestOptions) => {
  return (fetch(url,requestOptions).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }).then(data => {
    return data.length !== 0 ? data :'NoData' ;
  }).catch(error => {
    console.error("Error fetching data: ", error);
    return 'error';
  }));
}
