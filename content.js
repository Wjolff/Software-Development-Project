/** 
 * Remove all child elements from a DOM under a specificed class name (useful for removing many elements at once)
 * @param  {string} className The to-be-removed element's class name
 * @return {nothing}
 */
function removeClass(className){
    //method that returns element object who's class name matches the specified string
    const elements = document.getElementsByClassName(className);
    //runs while there are remaining elements in the class
    while(elements.length > 0){
        //removes the child element from the DOM
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/**
 * Remove an element from a DOM using Id (useful for removal of buttons and other singlular elements)
 * @param  {string} Id The to-be-removed element's Id name
 * @return {nothing}
 */
function removeId(Id){
    //method that returns element object by Id
    const elements = document.getElementById(Id);
    //removes element
    elements.remove();
}

//Homescreen Tags
removeId("scroll-container"); //removes tags

//Sidebar
removeClass("style-scope ytd-mini-guide-renderer"); //removes the collapsed sidebar menu
removeClass("style-scope ytd-guide-renderer"); //removes the open sidebar menu
removeId("guide-button"); //removes three lined sidebar icon

//Icons
removeId("buttons"); //removes the create content, notifications, and google account icons/buttons

//removes recommended videos (content)
removeClass("style-scope ytd-rich-grid-renderer");

//removes youtube logo
removeClass("style-scope ytd-topbar-logo-renderer");