document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.getElementById("gallery-button").addEventListener("click", function ()  {
     var div = document.getElementById("gallery-hide");
      if (div.style.display !== "none") {
          div.style.display = "none";
      }
      else {
          div.style.display = "block";
      }


  });


  });
