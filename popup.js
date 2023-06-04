/**
 * Changes the background colors and text colors to create a dark mode effect.
 * @return {nothing}
 */
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
    // Change button colors (open)
    document.querySelector(".toggle.active").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle2").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle3").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle4").style.backgroundColor = "rgb(69, 123, 157)";
    document.querySelector(".toggle5").style.backgroundColor = "rgb(69, 123, 157)";
}

/**
 * Resets the background colors and text colors to revert from dark mode to light mode.
 * @return {nothing}
 */
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
    // Reset button colors
    document.querySelector(".toggle").style.backgroundColor = "";
    document.querySelector(".toggle2").style.backgroundColor = "";
    document.querySelector(".toggle3").style.backgroundColor = "";
    document.querySelector(".toggle4").style.backgroundColor = "";
    document.querySelector(".toggle5").style.backgroundColor = "";
}

/**
 * Swaps the specified element with an image element, and stores the original element's
 * parent and index in localStorage for later restoration.
 * @param  {string} ID - The ID of the element to be swapped.
 * @return {object} An object with 'replace' and 'restore' functions.
 *                  - replace: Replaces the target element with the new image element.
 *                  - restore: Restores the original element back into its original position.
 */
function swapElements(ID) {
    var targetElement = document.getElementById(ID); // Get the target element by ID
    var imageElement = null; // Initialize imageElement as null
    var parent = null; // Initialize parent as null
    var index = -1; // Initialize index as -1
  
    var replace = function() {
        if (targetElement) {
            // Store the original state of the target element
            parent = targetElement.parentNode; // Get the parent node of the target element
            index = Array.prototype.indexOf.call(parent.children, targetElement); // Get the index of the target element within its parent's children
    
            imageElement = document.createElement('img'); // Create a new image element
            imageElement.src = 'https://drive.google.com/uc?export=view&id=1e71K7FYDQEbwh2h_uLYTQCO5BTm7VT03'; // Set the source of the image element
    
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

// Swaps the focusUp logo with YouTube's default logo
result = swapElements("logo")

/**
 * Hides specific elements in the active tab of the Chrome browser based on the given hideAction.
 * @param  {number} hideAction - An integer representing the hide action to be performed.
 *                              - 1: Focus mode hide action
 *                              - 2: Recommended videos hide action
 *                              - 3: Video comments hide action
 *                              - 4: Sidebar hide action
 *                              - 5: Tags hide action
 * @return {nothing}
 */
function hideElement(hideAction) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) { // Source for "chrome.tabs.query": Stack Overflow
        // Query the active tab in the current window
        if (hideAction == 1) {
            // If hideAction is 1, execute the hideElementInTab function with the 'focusModeHide' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: hideElementInTab,
            args: [{ action: 'focusModeHide' }]
            });
        }
        if (hideAction == 2) {
            // If hideAction is 2, execute the hideElementInTab function with the 'recVidsHide' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: hideElementInTab,
            args: [{ action: 'recVidsHide' }]
            });
        }
        if (hideAction == 3) {
            // If hideAction is 3, execute the hideElementInTab function with the 'vidCommentsHide' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: hideElementInTab,
            args: [{ action: 'vidCommentsHide' }]
            });
        }
        if (hideAction == 4) {
            // If hideAction is 4, execute the hideElementInTab function with the 'sidebarHide' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: hideElementInTab,
            args: [{ action: 'sidebarHide' }]
            });
        }
        if (hideAction == 5) {
            // If hideAction is 5, execute the hideElementInTab function with the 'tagsHide' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: hideElementInTab,
            args: [{ action: 'tagsHide' }]
            });
        }
    });
}

/**
 * Shows specific elements in the active tab of the Chrome browser based on the given showAction.
 * @param  {number} showAction - An integer representing the show action to be performed.
 *                              - 1: Focus mode show action
 *                              - 2: Recommended videos show action
 *                              - 3: Video comments show action
 *                              - 4: Sidebar show action
 *                              - 5: Tags show action
 * @return {nothing}
 */
function showElement(showAction) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        // Query the active tab in the current window
        if (showAction == 1) {
            // If showAction is 1, execute the showElementInTab function with the 'focusModeShow' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: showElementInTab,
            args: [{ action: 'focusModeShow' }]
            });
        }
        if (showAction == 2) {
            // If showAction is 2, execute the showElementInTab function with the 'recVidsShow' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: showElementInTab,
            args: [{ action: 'recVidsShow' }]
            });
        }
        if (showAction == 3) {
            // If showAction is 3, execute the showElementInTab function with the 'vidCommentsShow' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: showElementInTab,
            args: [{ action: 'vidCommentsShow' }]
            });
        }
        if (showAction == 4) {
            // If showAction is 4, execute the showElementInTab function with the 'sidebarShow' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: showElementInTab,
            args: [{ action: 'sidebarShow' }]
            });
        }
        if (showAction == 5) {
            // If showAction is 5, execute the showElementInTab function with the 'tagsShow' action
            chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: showElementInTab,
            args: [{ action: 'tagsShow' }]
            });
        }
        });
  }

/**
 * Function to be executed in the content script of the active tab.
 * Hides specific elements in the active tab based on the hide action specified in the message object.
 * @param  {object} message - The message being passed by hideElement.
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
 * Function to be executed in the content script of the active tab.
 * Shows specific elements in the active tab based on the show action specified in the message object.
 * @param  {object} message - The message being passed by showElement.
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