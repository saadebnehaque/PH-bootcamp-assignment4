### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector`/`querySelectorAll`?
* **`getElementById`**: Selects a single element by its unique ID. It is the fastest selection method.
* **`getElementsByClassName`**: Returns a live `HTMLCollection` of all elements with a specific class name. It does not support array methods like `forEach` directly.
* **`querySelector`**: Uses CSS selectors to find and return the **first** element that matches the selector.
* **`querySelectorAll`**: Returns a static `NodeList` of **all** matching elements. It supports `forEach` and is very flexible.

### 2. How do you create and insert a new element into the DOM?
1. **Create**: Use `document.createElement('tagName')` to create the element.
2. **Configure**: Add content or classes using `innerText`, `innerHTML`, or `classList`.
3. **Insert**: Use `appendChild()` to add it at the end or `prepend()` to add it at the beginning of a parent container.

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a way of event propagation in the DOM where an event starts from the target element (the child) and then "bubbles up" to its parent and higher ancestors in the DOM tree. It works from the **bottom to top** (Child → Parent → Document).



### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple children.
* **Usefulness**: It saves memory by using fewer listeners and ensures that **newly added children** (added dynamically) inherit the same event logic automatically.



### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?
* **`preventDefault()`**: Prevents the **default browser behavior** (e.g., stopping a form from refreshing the page or a link from navigating).
* **`stopPropagation()`**: Stops the **event from bubbling up** the DOM tree, preventing parent event handlers from being triggered.