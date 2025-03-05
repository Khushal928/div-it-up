# Challenge

I have added another function to script.js. when double clicked, will move plants(I thought of moving them to center since position is relative, it is just moving.)

```javascript
    terrariumElement.ondblclick = movetoCenter;
    function movetoCenter() {
        terrariumElement.style.top = "50%";
        terrariumElement.style.left = "50%";  
    }
```

# Assignment

In gmail, when we get a new mail, that mail is dynamically added at the top. here, when web page recieves this mail, it creates a new division and add content at top. this is done by DOM.
