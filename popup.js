//opens a communication between scripts
var port = chrome.runtime.connect({name: "popup"});

// sends a message throw the communication port
port.postMessage({start: "A"});


// TO-DO:
// - darkmode
// - some element botton of extension (runtime?)
// - remove scroll bar sidebar
// - debug for other instances
// - fix main issue

// /**
//  * Reposition an element using the element Id
//  * @param  {string} Id The to-be-removed element's Id name
//  * @param  {string} x The x-position of the element from the right
//  * @param  {string} y The y-position of the element from the top
//  * @return {nothing}
//  */
// function setIdPosition(Id, x, y){
//     //gets element using id tag
//     const idPosElement = document.getElementById(Id);
//     //keeps position relative for easier placement/manipulation if element has flex
//     idPosElement.style.position = "relative";
//     //sets new x-position of element
//     idPosElement.style.right = x;
//     //sets new y-position of element
//     idPosElement.style.top = y;
// }

// //**For Repositioning YouTube Searchbar
// //detects if a key is pressed
// document.addEventListener("keyup", function(event) {
//     //if the enter key is pressed
//     if (event.keyCode === 13) {
//         //if the form is not empty (the user has inputted a search value)
//         if(document.getElementById("search-input").value !== "") {
//             //moves searchbar to top of screen
//             setIdPosition("center", 0, 0);
//             //keeps flex the same for searchbar when moved to center
//             document.getElementById("center").style.flex = "0.4";
//         }
//     }
//     else setIdPosition("center", 0, 520);
// });
// //if the search button is clicked
// document.getElementById('search-icon-legacy').addEventListener('click', function(){
//     setIdPosition("center", 0, 0);
//     document.getElementById("center").style.flex = "0.4";
// });


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

