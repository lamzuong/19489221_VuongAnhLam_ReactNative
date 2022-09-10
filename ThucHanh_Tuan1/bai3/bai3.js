fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      var title = post.title;
      var body = post.body;
      return '<li><h2>'+title+'</h2><p>'+body+'</p></li>';
    });
    var html = htmls.join('');
    document.getElementById('post-block').innerHTML = html;
  })
  .catch(function (err) {
    alert("Có lỗi");
  });
