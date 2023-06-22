  document.getElementById("save-btn").addEventListener("click", () => {
  setCookie(); 
});


function popup(cookie) {
        alert(`Cookie ${cookie} applied, nya!`);
        window.location.href = window.location = '/';
}

function setCookie() {
        var apiSelect = document.getElementById("api-select");
        var apiValue = apiSelect.options[apiSelect.selectedIndex].value;
        console.log(apiSelect.value);
        var colorSelect = document.getElementById("color-select");
        var colorValue = colorSelect.value;
        let apiToDeliver = apiSelect.value;
        let stringToDeliver = `${apiToDeliver}?${encodeURIComponent(colorValue)}`;
        document.cookie = stringToDeliver;
        popup(document.cookie);
        // if (apiValue === "catapi") {
        //   let stringToDeliver = `CurAPI=catapi?${encodeURIComponent(colorValue)}`;
        //   document.cookie = stringToDeliver;
        //   popup(document.cookie);
        // } else if (apiValue === "shibe") {
        //   document.cookie = "CurAPI=shibe";
        //   document.cookie = "color=" + encodeURIComponent(colorValue);
        //   popup(document.cookie);
        // } else if (apiValue === "animality") {
        //   document.cookie = "CurAPI=animality";
        //   document.cookie = "color=" + encodeURIComponent(colorValue);
        //   popup(document.cookie);
        // }
      }

      // Set the default value of the dropdown list based on the "CurAPI" cookie
      function setDefaultAPIValue() {
        var apiSelect = document.getElementById("api-select");
        var curAPI = getCookie("CurAPI");

        if (curAPI) {
          for (var i = 0; i < apiSelect.options.length; i++) {
            if (apiSelect.options[i].value === curAPI) {
              apiSelect.selectedIndex = i;
              break;
            }
          }
        }
      }

// Call the setDefaultAPIValue function when the page loads
window.onload = setDefaultAPIValue;

import {getCookie} from './shared.js'
