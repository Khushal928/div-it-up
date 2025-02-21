#H1 Review and Self Study:
```javascript
const arr = ["hi",how"","you"];
const first = arr.pop();
console.log(first); // this will not only remove last element but it also returns that last element 
const last = arr.shift();
console.log(last);  // same goes for this too it not only removes first element but also reeturns it 

```
```javascript
const arr = ["hi","how","you"];
const first = arr.slice(0, 1);// first will store  hi
const rem = arr.slice(1);     // rem will store how and you
```



#h2 Assignment
When we are building a shopping cart, we need many things which include user name, his password, an array of all items which contain objects which probably include a name of item and number of such items<br>>


<p>
first one is username which is a string
</p>
<p>
next is alpha nemeric password which is again a string 
</p>
<p>
an array of all items in the cart
</p>
<p>
an object in the follow whose object's format is something like following
```
name : 
value:
```
<br>
where if a new item is introduced to cart a new object is created and value will be number of that items thrown into cart
</p>
