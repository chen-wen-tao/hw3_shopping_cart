1. I first watched recording for all the parts thats done during the class, and I reimplemented all the functionalities step by step, including create products, add product to the shopping cart, calculate the total price within the shopping cart
2. I implemented the remove feature by first adding a remove button next to each item within the shopping cart. Then I added the onclick feature with the remove function. Similar to the add to the shopping cart function, I implemented the remove function within the main.jsx where I can modify the state varibale, productToBuy. The implementation itself is nothing but remove the element from the state list.
3. For the pagination, I created two new state variables one called totalPage, the other called currentPage. Totalpage stays at main.jsx since the only time it is going to change is when we add an new product into "products", so I simply check if the element exceeds the number of element one page can hold. On the other hand, currentPage was put into ProductsList.jsx since that's the only place the variable will be used. Within ProductsList.jsx I added two more buttons to move forward or backward on pages. The onclick functions of the two buttons are defined within ProductsList.jsx as well. 
4. I connected the project to firebase and used useeffect hook to update the state variable constantly. Also, I implemented add and remove functionalities for the firebase.
5. I followed the instrucations in recording to deploy the project on Firebase.


#Video Url
https://youtu.be/kP9Z-ofJUdU
