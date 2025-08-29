1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById : it returns an element by ID.
getElementByClassName : it returns html collection of elements with the class .
querySelector : it returns the first element matching a css selector.
querySelectorAll : it returns all the element matching a css selector.

2. How do you create and insert a new element into the DOM?
Ans :
step 1. Create element
const newDiv = document.createElement("div");

step 2. Add text/content
newDiv.textContent = "Hello World!";

step 3. Insert into DOM
document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
   Ans :
   Event Bubbling means:
    When clicked a child element, the event first runs on that element, then on its parent, then on grandparent all the way up to document.
    It can be stop with event.stopPropagation().
   
4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Put one event listener on a parent to handle events on its child elements.

    Why it's useful:
    Less code
    Works for dynamic/new elements
    Better performance
5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: difeerences :
    preventDefault():stops browser default behavior
    stopPropagation():stops event from reaching parents