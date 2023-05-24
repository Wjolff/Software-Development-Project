//opens a communication port
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name === "popup");
    
    //listen for every message passing throw it
    port.onMessage.addListener(function(o) {

        //if focusMode button toggled on
        if (o.start && o.start === 'A') {
            //Hides Homescreen Tags
            chrome.tabs.executeScript(null, {code: "document.getElementById('scroll-container').style.visibility = 'hidden';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('right-arrow').style.visibility = 'hidden';"});
            //Hides Top Icons
            chrome.tabs.executeScript(null, {code: "document.getElementById('end').style.visibility = 'hidden';"});
            //Hides Sidebar
            chrome.tabs.executeScript(null, {code: "document.getElementById('start').style.visibility = 'hidden';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('items').style.visibility = 'hidden';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('sections').style.visibility = 'hidden';"});
            //Hides Recommended Videos
            chrome.tabs.executeScript(null, {code: "document.getElementById('contents').style.visibility = 'hidden';"});
            //Hides Youtube Country Icons
            chrome.tabs.executeScript(null, {code: "document.getElementById('logo-icon').style.visibility = 'hidden';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('country-code').style.visibility = 'hidden';"});
            //Hides Copyright Footer
            chrome.tabs.executeScript(null, {code: "document.getElementById('footer').style.visibility = 'hidden';"});
        }
        //if focusMode button toggled off
        else if(o.start && o.start === 'B') {
            //Shows Homescreen Tags
            chrome.tabs.executeScript(null, {code: "document.getElementById('scroll-container').style.visibility = 'visible';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('right-arrow').style.visibility = 'visible';"});
            //Shows Top Icons
            chrome.tabs.executeScript(null, {code: "document.getElementById('end').style.visibility = 'visible';"});
            //Shows Sidebar
            chrome.tabs.executeScript(null, {code: "document.getElementById('start').style.visibility = 'visible';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('items').style.visibility = 'visible';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('sections').style.visibility = 'visible';"});
            //Shows Recommended Videos
            chrome.tabs.executeScript(null, {code: "document.getElementById('contents').style.visibility = 'visible';"});
            //Shows Youtube Country Icons
            chrome.tabs.executeScript(null, {code: "document.getElementById('logo-icon').style.visibility = 'visible';"});
            chrome.tabs.executeScript(null, {code: "document.getElementById('country-code').style.visibility = 'visible';"});
            //Shows Copyright Footer
            chrome.tabs.executeScript(null, {code: "document.getElementById('footer').style.visibility = 'visible';"});
        }
        else if(o.start && o.start === 'C'){
            
        }
    });
});