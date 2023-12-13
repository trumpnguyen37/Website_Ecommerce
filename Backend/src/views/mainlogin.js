document.addEventListener("DOMContentLoaded", () => {
    "use strict";
  
    const loginBtn = document.getElementById("login_btnccc");
    loginBtn.addEventListener("click", () => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", "/api/addCategory", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Handle successful response here
            console.log("Category added successfully!");
          } else {
            console.error("Error adding category:", xhr.responseText);
          }
        }
      };
      xhr.send();
    });
  });