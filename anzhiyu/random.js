var posts=["2025/07/04/诗经·桃夭/","2025/07/04/诗经-关雎/","2025/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };