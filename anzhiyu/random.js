var posts=["2025/07/06/0008/","2025/07/06/0010/","2025/07/06/0009/","2025/07/06/0011/","2025/07/06/0012/","2025/07/06/浣溪沙·谁念西风独自凉/","2025/07/06/网络技术/","2025/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };