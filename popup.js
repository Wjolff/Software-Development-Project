// TO-DO:
// - darkmode
// - debug (make sure code works in videoplayer too)
// - initial preference

function searchbar() {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: setSeachbar,
            args: [{action1: 'searchBar'}]
        });
    });
}

/**
 * Reposition an element using the element Id
 * @param  {string} Id The to-be-removed element's Id name
 * @param  {string} x The x-position of the element from the right
 * @param  {string} y The y-position of the element from the top
 * @return {nothing}
 */
function setSeachbar(ID, x, y, flex) {
    //gets element using id tag
    element = document.getElementById(ID);
    //keeps position relative for easier placement/manipulation if element has flex
    element.style.position = "relative";
    //sets new x-position of element
    element.style.right = x;
    //sets new y-position of element
    element.style.top = y;
    //sets flex of element
    element.style.flex = flex;
}

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
        else if(hideAction == 2) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'recVidsHide'}]
            });
        }
        else if(hideAction == 3) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'vidCommentsHide'}]
            });
        }
        else if(hideAction == 4) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'sidebarHide'}]
            });
        }
        else if(hideAction == 5) {
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
        else if(showAction == 2) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'recVidsShow'}]
            });
        }
        else if(showAction == 3) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'vidCommentsShow'}]
            });
        }
        else if(showAction == 4) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'sidebarShow'}]
            });
        }
        else if(showAction == 5) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'tagsShow'}]
            });
        }
    });
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
            // //Repositioning Element
            // imageElement.style.position = 'absolute';
            // imageElement.style.left = "400px";
            // imageElement.style.top = "150px";
            // //Resizing image
            // imageElement.style.height = "780px";
            // imageElement.style.width = "1040px";

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
            }
        }
    };

    var restore = function() {
        if (parent && parent.children && parent.children[index]) {
            // Remove the image element
            parent.removeChild(imageElement);
      
            // Insert the original element back into its original position
            parent.insertBefore(targetElement, parent.children[index]);
          }
    };

    return {
        replace: replace,
        restore: restore
    };
}

//Storing the replaceElementWithImage object (applied to the logo) as "result"
var result = swapElements("logo");

/**
 * Function to be executed in the content script of the active tab
 * @param  {object} message The message being passed by hideElement
 * @return {nothing}
 */
function hideElementInTab(message) {
    //If focusMode toggle is clicked
    if (message.action === 'focusModeHide') {
        //Calls the replace function of the result attribute from the replaceElementWithImage function
        result.replace();
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
        //Fixing Searchbar
        setSeachbar("center", "-94px", "0px", 0.44);
    }
    //If Hide Recommended Videos toggle is clicked
    else if(message.action === 'recVidsHide') {
        //Hides Recommended Videos
        document.getElementById('related').style.visibility = 'hidden';
        document.getElementById('contents').style.visibility = 'hidden';
    }
    //If Hide Video Comments toggle is clicked
    else if(message.action === 'vidCommentsHide') {
        //Hides Video Comments
        document.getElementById('comments').style.visibility = 'hidden';
    }
    //If Hide Sidebar toggle is clicked
    else if(message.action === 'sidebarHide') {
        //Hides Sidebar
        document.getElementById('items').style.visibility = 'hidden';
        document.getElementById('sections').style.visibility = 'hidden';
        document.getElementById('guide-button').style.visibility = 'hidden';
    }
    //If Hide Tags toggle is clicked
    else if(message.action === 'tagsHide') {
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
        //Calls the replace function of the result attribute from the replaceElementWithImage function
        result.restore();
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
        //Fixing Searchbar
        setSeachbar("center", "0px", "0px", 0.453);
    }
    else if(message.action === 'recVidsShow') {
        //Shows Recommended Videos
        document.getElementById('related').style.visibility = 'visible';
        document.getElementById('contents').style.visibility = 'visible';
    }
    else if(message.action === 'vidCommentsShow') {
        //Shows Video Comments
        document.getElementById('comments').style.visibility = 'visible';
    }
    else if(message.action === 'sidebarShow') {
        //Shows Sidebar
        document.getElementById('items').style.visibility = 'visible';
        document.getElementById('sections').style.visibility = 'visible';
        document.getElementById('guide-button').style.visibility = 'visible';
    }
    else if(message.action === 'tagsShow') {
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