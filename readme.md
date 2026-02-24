1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() selects a single element using its unique id. It always returns one element because an id should be unique in a document.

getElementsByClassName() selects multiple elements using a class name. It returns an HTMLCollection, which can contain multiple elements. You need to use an index to access a specific element.

querySelector() uses a CSS selector and returns the first matching element. It can select elements by id, class, tag name, attribute, etc.

querySelectorAll() also uses a CSS selector but returns all matching elements. It returns a NodeList, which can contain multiple elements.

2. How do you create and insert a new element into the DOM?

To create a new element in the DOM, you use document.createElement(). Then you add content using innerText or innerHTML. After that, you insert it into the page using appendChild() or append().

Example:
let div = document.createElement("div");
div.innerText = "Hello World";
document.body.appendChild(div);

This creates a new div element and inserts it into the page.

3. What is Event Bubbling? And how does it work?

Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.

For example, if a button is inside a div and you click the button, the click event first runs on the button, then it moves to the parent div, then to the body, and finally to the document. This upward movement of the event is called event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you add a single event listener to a parent element instead of adding separate listeners to multiple child elements. The parent listens for events that bubble up from its children.

It is useful because it improves performance, reduces duplicate code, works with dynamically created elements, and makes event handling easier to manage.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser’s default behavior for an event. For example, it can prevent a form from reloading the page when submitted.

stopPropagation() stops the event from moving up to parent elements. It prevents event bubbling.

In short, preventDefault() stops the default browser action, while stopPropagation() stops the event from propagating to parent elements.
