var posts=["posts/2022/","posts/2022Japan/","posts/K-ON!/","posts/undefined/","posts/aad5/","posts/204/","posts/d71a/","posts/5a9/","posts/f07b/","posts/4301/","posts/d401/","posts/f51d/","posts/1abe/","posts/a70f/","posts/b700/","posts/28c8/","posts/AMAD/","posts/safego/","posts/270c/","posts/aedd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };