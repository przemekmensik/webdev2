document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.getElementById("gallery-button").addEventListener("click", function ()  {
     var div = document.getElementById("gallery-hide");
      if (div.style.display == "block") {
          div.style.display = "none";
      }
      else {
          div.style.display = "block";
      }
    });

    document.getElementById("blog-button").addEventListener("click", function ()  {
     var div = document.getElementById("blog-hide");
      if (div.style.display == "block") {
          div.style.display = "none";
      }
      else {
          div.style.display = "block";
      }
    });


  });
