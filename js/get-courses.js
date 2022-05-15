$('#course_search').keyup(function (e) {
  document.getElementById('courses').innerHTML = '';
  e.preventDefault();
  let formData = document.getElementById('course_search').value;
  fetch('https://mrtechnawy.com/api/course/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'search': formData
    },
    body: JSON.stringify({
      search: formData
    })
  })
    .then(response => response.json())
    .then(json => {
      document.getElementById('courses').innerHTML = json.data;
    })
    .catch(err => console.log(err));
});