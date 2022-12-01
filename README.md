
# InstaNoodles

[Click here to view!](https://instanoodles.herokuapp.com)

## Background
--- 
Instanoodles is a website clone of a UK-based vegan instant noodle company, [FutureNoodles](https://futurenoodles.com). The company uses a fun and modern aesthetic in their brand marketing, redefining what instant noodles can be. Additionally, FutureNoodles is a socially conscious, environmentally-friendly product that promotes wellness in their consumers by providing a healthier alternative for those who eat in a hurry. 

The website also contains many engaging animations that adds a spark of fun to an otherwise prosaic activity - online grocery shopping. 

## Technologies Utilized 
___ 

* AWS S3
* Heroku
* HTML5 and CSS
* Javascript/AJAX/JBuilder
* React/Redux
* Ruby on Rails 

## Features 
---
### User Authentication - Login/Signup 

InstaNoodles features a fully functional user authentication system, complete with a demo user login and error handling for incomplete entries. The user is automatically redirected to the login page if they are attempting to purchase items or leave a review without being logged in for ease of access. The login and signup pages are connected for the user easily switch between the sign up or sign in pages. 

<img width="1154" alt="Screen Shot 2022-09-18 at 8 21 50 PM" src="https://user-images.githubusercontent.com/107089418/190944813-3ed65999-c936-4055-8e40-b8b5d52f6db7.png">

### Product Pages and Reviews 
--- 

Each product has a feature page where users can view its details and reviews. If the user is logged in, they can create, edit, or delete their own reviews for the product. The review form has error handling functionality and will prevent the user from submitting the form until all fields are completed. Furthermore, each user is only allowed to leave one review per product. The user can change the quantity of the product they wish to add to their cart using either the input field or the "+" and "-" incrementing buttons. 

<img width="1329" alt="Screen Shot 2022-09-18 at 8 27 03 PM" src="https://user-images.githubusercontent.com/107089418/190945138-0793e235-34b2-4265-8c82-d0dcdaca7ddd.png">
<img width="1365" alt="Screen Shot 2022-09-18 at 8 27 20 PM" src="https://user-images.githubusercontent.com/107089418/190945158-43bd0571-33a9-438d-93ab-354afcd0fcbf.png">

This code handles the logic for checking if the user is making an new review or editing an exisiting review. If the review exists, the contents of the review will be used to prepopuluate the review form. The useState hook is used here to track the state of the review contents.

![review-code](https://user-images.githubusercontent.com/107089418/192113718-479dd983-3c77-4537-8328-078d689b2636.png)


### Cart 
---

When the user adds an item to their cart via the product show page, a shopping cart modal will appear to signify successful completion. The cart items can be updated using an input field to change the quantity in the modal. The cart items can also be deleted to remove the item entirely. The shopping cart will calculate the subtotal of each item and the total subtotal of all items in the cart. When the user wishes to check out, they can press the checkout button which will empty the cart and redirect the user to a purchase completed modal. The user exit the modal at any point by clicking outside of the modal. 

<img width="1091" alt="Screen Shot 2022-09-18 at 8 33 10 PM" src="https://user-images.githubusercontent.com/107089418/190945599-4d27c6c6-10a3-4509-a4bf-c42df13e86f6.png">

The code snippet below contains logic that handles the incrementation and decrementation of each cart listing. The cart listing's input field contains a placeholder with their current amount. When the user changes the amount and presses the "update amount" button, the new quantity be recalculated into the subtotal.


![cartcode](https://user-images.githubusercontent.com/107089418/204940615-4c2b2a5c-b17c-46f6-a811-9becfe5c83aa.png)


### Search Bar 
---

A search bar feature is revealed by clicking on the spyglass in the navigation bar. The search bar will render listings that contains the query. If the query does not match any of the listing names, an error message of no matching listings will appear. The user can click on the matching results to navigate to their show pages. 

<img width="1391" alt="Screen Shot 2022-09-18 at 8 55 25 PM" src="https://user-images.githubusercontent.com/107089418/190947386-4fdaccb5-3ba6-4b5e-aeef-10d274403c78.png">



