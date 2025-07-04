var posts=["2025/07/04/这是一篇新的博文/","2025/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };