//TODO: Check with Ms. Edwards if the same variable/argument name (element/className) can be used within multiple different functions

/** 
 * Remove all child elements from a DOM under a specificed class name (useful for removing many elements at once)
 * @param  {string} className The to-be-removed element's class name
 * @return {nothing}
 */
function removeClass(className){
    //method that returns element object who's class name matches the specified string
    const classElement = document.getElementsByClassName(className);
    //runs while there are remaining elements in the class
    while(classElement.length > 0){
        //removes the child element from the DOM
        classElement[0].parentNode.removeChild(classElement[0]);
    }
}

/**
 * Remove an element from a DOM using Id (useful for removal of buttons and other singlular elements)
 * @param  {string} Id The to-be-removed element's Id name
 * @return {nothing}
 */
function removeId(Id){
    //method that returns element using the Id
    const idElement = document.getElementById(Id);
    //removes element
    idElement.remove();
}

/**
 * Reposition an element using the element Id
 * @param  {string} Id The to-be-removed element's Id name
 * @param  {string} x The x-position of the element from the right
 * @param  {string} y The y-position of the element from the top
 * @return {nothing}
 */
function setIdPosition(Id, x, y){
    const idPosElement = document.getElementById(Id);
    //element position is set to absolute so as to not disturb other elements' positions
    idPosElement.style.position = "absolute";
    idPosElement.style.right = x;
    idPosElement.style.top = y;
}

/**
 * Reposition an element using the class name
 * @param  {string} className The to-be-removed element's class name
 * @param  {string} x The x-position of the element from the right
 * @param  {string} y The y-position of the element from the top
 * @return {nothing}
 */
function setClassPosition(className, x, y){
    const classPosElement = document.getElementsByClassName(className);
    classPosElement.style.position = "absolute";
    classPosElement.style.right = x;
    classPosElement.style.top = y;
}

//Homescreen Tags
removeId("scroll-container"); //removes tags
removeId("right-arrow"); //removes tags scroll arrow

//Top Icons
removeId("end"); //removes the create content, notifications, and google account icons/buttons

//Sidebar
removeId("start"); //removes three lined sidebar icon
removeId("items"); //removes the collapsed sidebar menu
removeId("sections"); //removes the open sidebar menu

//removes recommended videos (content)
removeId("contents");

//Youtube Country Icons
removeId("logo-icon"); //removes youtube icon
removeId("country-code"); //removes country code (ex. CA)

//Copyright Footer
removeId("footer");

//Repositioning Homescreen
setIdPosition("center", "800px", "550px"); //centers the youtube searchbar