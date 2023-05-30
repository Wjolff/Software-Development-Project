function darkMode() {
    // Change background colors
    document.querySelector(".outer_background").style.backgroundColor = "rgb(64, 67, 78)";
    document.querySelector(".inner_background").style.backgroundColor = "rgb(42, 46, 57)";
    document.querySelector(".focusMode_background").style.backgroundColor = "rgb(82, 96, 118)";
    document.querySelector(".vidPlayer_background").style.backgroundColor = "rgb(82, 96, 118)";
    document.querySelector(".top_background").style.backgroundColor = "rgb(0, 0, 0)";
    // Change text colors
    document.querySelector(".title_focusUp2").style.color = "rgb(255, 255, 255)";
    document.querySelector(".title_focusUp1").style.color = "rgb(69, 123, 157)";
    document.querySelector(".focus_mode").style.color = "rgb(255, 255, 255)";
    document.querySelector(".hide_recommended_videos").style.color = "rgb(255, 255, 255)";
    document.querySelector(".hide_video_comments").style.color = "rgb(255, 255, 255)";
    document.querySelector(".hide_sidebar").style.color = "rgb(255, 255, 255)";
    document.querySelector(".hide_tags").style.color = "rgb(255, 255, 255)";
    document.querySelector(".time_title").style.color = "rgb(255, 255, 255)";
    document.querySelector(".time").style.color = "rgb(255, 255, 255)";
    // Change button colors (open)
    document.querySelector(".toggle").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle2").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle3").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle4").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle5").style.backgroundColor = "rgb(69, 123, 157)";
    // Change button colors (closed)
    // Change button colors (closed)
    document.querySelector("..toggle.active").style.backgroundColor = "rgb(171, 171, 171)";
    document.querySelector("..toggle2.active2").style.backgroundColor = "rgb(171, 171, 171)";
    document.querySelector("..toggle3.active3").style.backgroundColor = "rgb(171, 171, 171)";
    document.querySelector("..toggle4.active4").style.backgroundColor = "rgb(171, 171, 171)";
    document.querySelector("..toggle5.active5").style.backgroundColor = "rgb(171, 171, 171)";
}
  
function lightMode() {
    // Reset background colors
    document.querySelector(".outer_background").style.backgroundColor = "";
    document.querySelector(".inner_background").style.backgroundColor = "";
    document.querySelector(".focusMode_background").style.backgroundColor = "";
    document.querySelector(".vidPlayer_background").style.backgroundColor = "";
    document.querySelector(".top_background").style.backgroundColor = "";
    // Reset text colors
    document.querySelector(".title_focusUp2").style.color = "";
    document.querySelector(".title_focusUp1").style.color = "";
    document.querySelector(".focus_mode").style.color = "";
    document.querySelector(".hide_recommended_videos").style.color = "";
    document.querySelector(".hide_video_comments").style.color = "";
    document.querySelector(".hide_sidebar").style.color = "";
    document.querySelector(".hide_tags").style.color = "";
    document.querySelector(".time_title").style.color = "";
    document.querySelector(".time").style.color = "";
    // Reset button colors
    document.querySelector(".toggle").style.backgroundColor = "";
    document.querySelector(".toggle2").style.backgroundColor = "";
    document.querySelector(".toggle3").style.backgroundColor = "";
    document.querySelector(".toggle4").style.backgroundColor = "";
    document.querySelector(".toggle5").style.backgroundColor = "";
    // Change button colors (closed)
    document.querySelector("..toggle.active").style.backgroundColor = "";
    document.querySelector("..toggle2.active2").style.backgroundColor = "";
    document.querySelector("..toggle3.active3").style.backgroundColor = "";
    document.querySelector("..toggle4.active4").style.backgroundColor = "";
    document.querySelector("..toggle5.active5").style.backgroundColor = "";
}

/**
 * Swaps an existing DOM element with a generated image and vice versa
 * @param {string} ID Id of object to be replaced in DOM
 * @return {Function} Object attribute that is a function which allows a specified DOM element to be replaced with generated image
 * @return {Function} Object attribute that is a function which restores the original DOM element
 */
function swapElements(ID) {
    var targetElement = document.getElementById(ID);
    var imageElement = null;
    var parent = null;
    var index = -1;
  
    var replace = function() {
      if (targetElement) {
        // Store the original state of the target element
        parent = targetElement.parentNode;
        index = Array.prototype.indexOf.call(parent.children, targetElement);
  
        imageElement = document.createElement('img');
        imageElement.src = 'https://drive.google.com/uc?export=view&id=1e71K7FYDQEbwh2h_uLYTQCO5BTm7VT03';
  
        // Apply responsive image styles
        imageElement.style.maxWidth = '65%';
        imageElement.style.height = 'auto';
  
        // Apply positioning styles
        imageElement.style.position = 'absolute';
        imageElement.style.top = '1000%';
        imageElement.style.left = '51%';
        imageElement.style.transform = 'translate(-50%, -50%)';
  
        if (parent) {
          // Replace the target element with the new image element
          parent.replaceChild(imageElement, targetElement);
  
          // Store parent node and index in localStorage
          localStorage.setItem('parent', parent.outerHTML);
          localStorage.setItem('index', index.toString());
        }
      }
    };
  
    var restore = function() {
      // Retrieve parent node and index from localStorage
      var storedParent = localStorage.getItem('parent');
      var storedIndex = localStorage.getItem('index');
      if (storedParent && storedIndex) {
        var parsedIndex = parseInt(storedIndex);
        var tempParent = document.createElement('div');
        tempParent.innerHTML = storedParent;
  
        var restoredParent = tempParent.firstChild;
        var restoredTargetElement = restoredParent.children[parsedIndex];
  
        if (restoredParent && restoredTargetElement) {
          // Remove the image element
          if (imageElement && imageElement.parentNode) {
            imageElement.parentNode.removeChild(imageElement);
          }
  
          // Insert the original element back into its original position
          restoredParent.replaceChild(targetElement, restoredTargetElement);
        }
      }
    };
  
    return {
      replace: replace,
      restore: restore
    };
}

result = swapElements("logo")

/**
 * Executes the hideElementTab function in the active tab by sending an action message
 * @param  {Number} hideAction The to-be-removed element's Id name
 * @return {nothing}
 */
function hideElement(hideAction) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        if(hideAction == 1){
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'focusModeHide'}]
            });
        }
        if(hideAction == 2) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'recVidsHide'}]
            });
        }
        if(hideAction == 3) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'vidCommentsHide'}]
            });
        }
        if(hideAction == 4) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'sidebarHide'}]
            });
        }
        if(hideAction == 5) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'tagsHide'}]
            });
        }
    });
}

/**
 * Executes the showElementTab function in the active tab by sending an action message
 * @param  {Number} showAction The number of the action message that should be sent
 * @return {nothing}
 */
function showElement(showAction) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        if(showAction == 1){
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'focusModeShow'}]
            });
        }
        if(showAction == 2) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'recVidsShow'}]
            });
        }
        if(showAction == 3) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'vidCommentsShow'}]
            });
        }
        if(showAction == 4) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'sidebarShow'}]
            });
        }
        if(showAction == 5) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'tagsShow'}]
            });
        }
    });
}

/**
 * Function to be executed in the content script of the active tab
 * @param  {object} message The message being passed by hideElement
 * @return {nothing}
 */
function hideElementInTab(message) {
    //If focusMode toggle is clicked
    if (message.action === 'focusModeHide') {
        //Hides Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'hidden';
        document.getElementById('right-arrow').style.visibility = 'hidden'
        //Hides Top Icons
        document.getElementById('end').style.visibility = 'hidden';
        //Hides Sidebar
        document.getElementById('items').style.visibility = 'hidden';
        document.getElementById('sections').style.visibility = 'hidden';
        document.getElementById('guide-button').style.visibility = 'hidden';
        //Hides Recommended Videos
        document.getElementById('contents').style.visibility = 'hidden';
        document.getElementById('related').style.visibility = 'hidden';
        //Hides Youtube Country Icons
        document.getElementById('country-code').style.visibility = 'hidden';
        //Hides Copyright Footer
        document.getElementById('footer').style.visibility = 'hidden';
        result.replace();
    }
    //If Hide Recommended Videos toggle is clicked
    if(message.action === 'recVidsHide') {
        //Hides Recommended Videos
        document.getElementById('related').style.visibility = 'hidden';
        document.getElementById('contents').style.visibility = 'hidden';
    }
    //If Hide Video Comments toggle is clicked
    if(message.action === 'vidCommentsHide') {
        //Hides Video Comments
        document.getElementById('comments').style.visibility = 'hidden';
    }
    //If Hide Sidebar toggle is clicked
    if(message.action === 'sidebarHide') {
        //Hides Sidebar
        document.getElementById('items').style.visibility = 'hidden';
        document.getElementById('sections').style.visibility = 'hidden';
        document.getElementById('guide-button').style.visibility = 'hidden';
    }
    //If Hide Tags toggle is clicked
    if(message.action === 'tagsHide') {
        //Hides Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'hidden';
        document.getElementById('right-arrow').style.visibility = 'hidden'
    }
}

/**
 * Function to be executed in the content script of the active tab
 * @param  {object} message The message being passed by showElement
 * @return {nothing}
 */
function showElementInTab(message) {
    if (message.action === 'focusModeShow') {
        //Shows Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'visible';
        document.getElementById('right-arrow').style.visibility = 'visible'
        //Shows Top Icons
        document.getElementById('end').style.visibility = 'visible';
        //Shows Sidebar
        document.getElementById('items').style.visibility = 'visible';
        document.getElementById('sections').style.visibility = 'visible';
        document.getElementById('guide-button').style.visibility = 'visible';
        //Shows Recommended Videos
        document.getElementById('contents').style.visibility = 'visible';
        document.getElementById('related').style.visibility = 'visible';
        //Shows Youtube Country Icons
        document.getElementById('country-code').style.visibility = 'visible';
        //Shows Copyright Footer
        document.getElementById('footer').style.visibility = 'visible';
        result.restore();
    }
    if(message.action === 'recVidsShow') {
        //Shows Recommended Videos
        document.getElementById('related').style.visibility = 'visible';
        document.getElementById('contents').style.visibility = 'visible';
    }
    if(message.action === 'vidCommentsShow') {
        //Shows Video Comments
        document.getElementById('comments').style.visibility = 'visible';
    }
    if(message.action === 'sidebarShow') {
        //Shows Sidebar
        document.getElementById('items').style.visibility = 'visible';
        document.getElementById('sections').style.visibility = 'visible';
        document.getElementById('guide-button').style.visibility = 'visible';
    }
    if(message.action === 'tagsShow') {
        //Hides Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'visible';
        document.getElementById('right-arrow').style.visibility = 'visible'
    }
}


//Storing time user has been on YouTube

// // Get the current date
// const currentDate = new Date().toLocaleDateString();

// // Get the stored start time for the current date
// chrome.storage.local.get(currentDate, (result) => {
//   // Check if the start time is stored
//   if (result[currentDate]) {
//     // Calculate the duration
//     const startTime = result[currentDate];
//     const currentTime = new Date().getTime();
//     const durationInSeconds = Math.floor((currentTime - startTime) / 1000);

//     // Display the duration in the popup
//     const durationElement = document.getElementById('duration');
//     durationElement.textContent = `YouTube has been open for ${durationInSeconds} seconds today.`;
//   }
// });