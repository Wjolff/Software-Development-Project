/**
 * Reposition an element using the element Id
 * @param  {string} Id The to-be-removed element's Id name
 * @param  {string} x The x-position of the element from the right
 * @param  {string} y The y-position of the element from the top
 * @return {nothing}
 */
function setIdPosition(Id, x, y){
    //gets element using id tag
    const idPosElement = document.getElementById(Id);
    //keeps position relative for easier placement/manipulation if element has flex
    idPosElement.style.position = "relative";
    //sets new x-position of element
    idPosElement.style.right = x;
    //sets new y-position of element
    idPosElement.style.top = y;
}

/**
 * Executes the hideElementTab function in the active tab by sending an action message
 * @param  {int} hideAction The to-be-removed element's Id name
 * @return {nothing}
 */
function hideElement(hideAction) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        if(hideAction == 1){
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'focusModeHide'}]
            }).then(function (result) {});
            localStorage.setItem('hideElement', action);
        }
        else if(hideAction == 2) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'recVidsHide'}]
            }).then(function (result) {});
            localStorage.setItem('hideElement', action);
        }
        else if(hideAction == 3) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'vidCommentsHide'}]
            }).then(function (result) {});
            localStorage.setItem('hideElement', action);
        }
        else if(hideAction == 4) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'sidebarHide'}]
            }).then(function (result) {});
            localStorage.setItem('hideElement', action);
        }
        else if(hideAction == 5) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: hideElementInTab,
                args: [{action: 'tagsHide'}]
            }).then(function (result) {});
            localStorage.setItem('hideElement', action);
        }
    });
}

/**
 * Executes the showElementTab function in the active tab by sending an action message
 * @param  {int} showAction The number of the action message that should be sent
 * @return {nothing}
 */
function showElement(showAction) {
    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        if(showAction == 1){
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'focusModeShow'}]
            }).then(function (result) {});
        }
        else if(showAction == 2) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'recVidsShow'}]
            }).then(function (result) {});
        }
        else if(showAction == 3) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'vidCommentsShow'}]
            }).then(function (result) {});
        }
        else if(showAction == 4) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'sidebarShow'}]
            }).then(function (result) {});
        }
        else if(showAction == 5) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: showElementInTab,
                args: [{action: 'tagsShow'}]
            }).then(function (result) {});
        }
    });
}


// Function to be executed in the content script of the active tab
function hideElementInTab(message) {
    //If focusMode toggle is clicked
    if (message.action === 'focusModeHide') {
        //Hides Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'hidden';
        document.getElementById('right-arrow').style.visibility = 'hidden'
        //Hides Top Icons
        document.getElementById('end').style.visibility = 'hidden';
        //Hides Sidebar
        document.getElementById('start').style.visibility = 'hidden';
        document.getElementById('items').style.visibility = 'hidden';
        document.getElementById('sections').style.visibility = 'hidden';
        //Hides Recommended Videos
        document.getElementById('contents').style.visibility = 'hidden';
        document.getElementById('secondary').style.visibility = 'hidden';
        //ADD CODE: recommended videos in video player
        //Hides Youtube Country Icons
        document.getElementById('logo-icon').style.visibility = 'hidden';
        document.getElementById('country-code').style.visibility = 'hidden';
        //Hides Copyright Footer
        document.getElementById('footer').style.visibility = 'hidden';
        //ADD CODE: recommended videos in video player
        //Reposition YouTube Searchbar
        setIdPosition("center", "0px", "520px");
        document.getElementById("center").style.flex = "0.4";
    }
    //If Hide Recommended Videos toggle is clicked
    else if(message.action === 'recVidsHide') {
        //Hides Recommended Videos
        document.getElementById('contents').style.visibility = 'hidden';
        //ADD CODE: recommended videos in video player
    }
    //If Hide Video Comments toggle is clicked
    else if(message.action === 'vidCommentsHide') {
        //Hides Video Comments
        document.getElementById('comments').style.visibility = 'hidden';
    }
    //If Hide Sidebar toggle is clicked
    else if(message.action === 'sidebarHide') {
        //Hides Sidebar
        document.getElementById('start').style.visibility = 'hidden';
        document.getElementById('items').style.visibility = 'hidden';
        document.getElementById('sections').style.visibility = 'hidden';
    }
    //If Hide Tags toggle is clicked
    else if(message.action === 'tagsHide') {
        //Hides Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'hidden';
        document.getElementById('right-arrow').style.visibility = 'hidden'
    }
}

function showElementInTab(message) {
    if (message.action === 'focusModeShow') {
        //Shows Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'visible';
        document.getElementById('right-arrow').style.visibility = 'visible'
        //Shows Top Icons
        document.getElementById('end').style.visibility = 'visible';
        //Shows Sidebar
        document.getElementById('start').style.visibility = 'visible';
        document.getElementById('items').style.visibility = 'visible';
        document.getElementById('sections').style.visibility = 'visible';
        //Shows Recommended Videos
        document.getElementById('contents').style.visibility = 'visible';
        //Shows Youtube Country Icons
        document.getElementById('logo-icon').style.visibility = 'visible';
        document.getElementById('country-code').style.visibility = 'visible';
        //Shows Copyright Footer
        document.getElementById('footer').style.visibility = 'visible';
        //Shows YouTube Searchbar
        setIdPosition("center", "0px", "0px");
    }
    else if(message.action === 'recVidsShow') {
        //Hides Recommended Videos
        document.getElementById('contents').style.visibility = 'visible';
        //ADD CODE: recommended videos in video player
    }
    else if(message.action === 'vidCommentsShow') {
        //Shows Video Comments
        document.getElementById('comments').style.visibility = 'visible';
    }
    else if(message.action === 'sidebarShow') {
        //Hides Sidebar
        document.getElementById('start').style.visibility = 'visible';
        document.getElementById('items').style.visibility = 'visible';
        document.getElementById('sections').style.visibility = 'visible';
    }
    else if(message.action === 'tagsShow') {
        //Hides Homescreen Tags
        document.getElementById('scroll-container').style.visibility = 'visible';
        document.getElementById('right-arrow').style.visibility = 'visible'
    }
}

//**For Repositioning YouTube Searchbar
//Wrapping code in eventListener to only load when DOM content is available (prevents TypeError from being thrown)
document.addEventListener("DOMContentLoaded", function () {
    //if the search button is clicked
    document.getElementById('search-icon-legacy').addEventListener('click', function(){
        setIdPosition("center", "0px", "0px");
        document.getElementById("center").style.flex = "0.4";
    });
});
//Detect if key is pressed (situational - doesn't require wrapping in eventListener)
document.addEventListener("keyup", function(event) {
    //if the enter key is pressed
    if (event.keyCode === 13) {
        //if the form is not empty (the user has inputted a search value)
        if(document.getElementById("search-input").value !== "") {
            //moves searchbar to top of screen
            setIdPosition("center", "0px", "0px");
            //keeps flex the same for searchbar when moved to center
            document.getElementById("center").style.flex = "0.4";
            setIdPosition("center", "0px", "520px"); //centers the youtube searchbar
        }
    }
    else setIdPosition("center", "0px", "520px");
});


// //Hides Homescreen Tags
// chrome.tabs.executeScript(null, {code: "document.getElementById('scroll-container').style.visibility = 'hidden';"});
// chrome.tabs.executeScript(null, {code: "document.getElementById('right-arrow').style.visibility = 'hidden';"});
// //Hides Top Icons
// chrome.tabs.executeScript(null, {code: "document.getElementById('end').style.visibility = 'hidden';"});
// //Hides Sidebar
// chrome.tabs.executeScript(null, {code: "document.getElementById('start').style.visibility = 'hidden';"});
// chrome.tabs.executeScript(null, {code: "document.getElementById('items').style.visibility = 'hidden';"});
// chrome.tabs.executeScript(null, {code: "document.getElementById('sections').style.visibility = 'hidden';"});
// //Hides Recommended Videos
// chrome.tabs.executeScript(null, {code: "document.getElementById('contents').style.visibility = 'hidden';"});
// //Hides Youtube Country Icons
// chrome.tabs.executeScript(null, {code: "document.getElementById('logo-icon').style.visibility = 'hidden';"});
// chrome.tabs.executeScript(null, {code: "document.getElementById('country-code').style.visibility = 'hidden';"});
// //Hides Copyright Footer
// chrome.tabs.executeScript(null, {code: "document.getElementById('footer').style.visibility = 'hidden';"});




// function getCurrentTabId(cb) {
//     var query = {active: true, currentWindow: true};
//     chrome.tabs.query(query, function (tabArray) {
//         cb(tabArray[0].id)
//     });
// }

// function connectToCurrentTab () {
//     getCurrentTabId(function(currentTabId) {
//        chrome.tabs.connect(currentTabId, {name: "popup"})
//     });
// }


// //opens a communication between scripts
// var port = chrome.runtime.connect({name: "popup"});

// // sends a message throw the communication port
// port.postMessage({start: "A"});



// TO-DO:
// - darkmode
// - some element botton of extension (runtime?)
// - remove scroll bar sidebar
// - debug for other instances
// - fix main issue

// /** 
//  * Remove all child elements from a DOM under a specificed class name (useful for removing many elements at once)
//  * @param  {string} className The to-be-removed element's class name
//  * @return {nothing}
//  */
// function removeClass(className){
//     //method that returns element object who's class name matches the specified string
//     const classElement = document.getElementsByClassName(className);
//     //runs while there are remaining elements in the class
//     while(classElement.length > 0){
//         //removes the child element from the DOM
//         classElement[0].parentNode.removeChild(classElement[0]);
//     }
// }

// /**
//  * Reposition an element using the class name
//  * @param  {string} className The to-be-removed element's class name
//  * @param  {string} x The x-position of the element from the right
//  * @param  {string} y The y-position of the element from the top
//  * @return {nothing}
//  */
// function setClassPosition(className, x, y){
//     const classPosElement = document.getElementsByClassName(className);
//     classPosElement.style.position = "absolute";
//     classPosElement.style.right = x;
//     classPosElement.style.top = y;
// }




// /**
//  * Hides an element from a DOM using Id
//  * @param  {string} Id The to-be-removed element's Id name
//  * @return {nothing}
//  */
// function hideID(id){
//     document.getElementById(id).style.visibility = 'hidden';
// }

// /**
//  * Shows an element from a DOM using Id
//  * @param  {string} Id The to-be-removed element's Id name
//  * @return {nothing}
//  */
// function showID(id){
//     document.getElementById(id).style.visibility = "visible";
// }

// //Repositioning Homescreen
// setIdPosition("center", "0px", "520px"); //centers the youtube searchbar

