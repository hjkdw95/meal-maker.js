# meal-maker.js
Meal Maker task from Codecademy
<br>
<br>
Comments written in Korean
<br>
<br>
Codeacademy의 Learn Javascript 과제 중 Meal Maker를 한국어로 comment 해보았습니다.
<br>
<br>
<br>
<br>
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
<br>
In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
<br>
<br>
1. Start by creating an empty `menu` object.<br>
2. Add a `_courses` property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.<br>
3. Create three properties inside the `_courses` object called `appetizers`, `mains`, and `desserts`. Each one of these should initialize to an empty array.<br>
4. Create getter and setter methods for the `appetizers`, `mains`, and `desserts` properties.<br>
5. Inside your `menu` object, create an empty getter method for the `_courses` property.<br>
6. Inside the courses getter method, return an object that contains key/value pairs for `appetizers`, `mains`, and `desserts`.<br>
7. Inside the menu object, we are going to create a method called `.addDishToCourse()` which will be used to add a new dish to the specified course on the menu.<br>
The method should take in three parameters: the `courseName`, `the dishName` , and the `dishPrice`.<br>
8. The `.addDishToCourse()` method should create an object called `dish` which has a `name` and `price` which it gets from the parameters.<br>
The method should then push this `dish` object into the appropriate array in your `menu`‘s `_courses` object based on what `courseName` was passed in.<br>
9. Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.<br>
Create a method inside the `menu` object called `.getRandomDishFromCourse()`. It will take in one parameter which is the `courseName`.<br>
10. There are a few steps in getting the `.getRandomDishFromCourse()` to work.<br>
 - Retrieve the array of the given course’s dishes from the `menu`‘s `_courses` object and store in a variable called `dishes`.<br>
 - Generate a random index by multiplying `Math.random()` by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)<br>
 - Round that generated number to a whole number by using `Math.floor()` on the result.<br>
 - Return the `dish` located at that index in dishes.<br>
 11. Now that we have a way to get a random dish from a course, we can create a `.generateRandomMeal()` function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.<br>

 - The function should create an appetizer variable which should be the result of calling the `.getRandomDishFromCourse()` method when we pass in an appetizers string to it.<br>
 - Create a `main` variable and `dessert` variable the same way you created the `appetizer` variable, but make sure to pass in the right course type.<br>
 - Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.<br>
 12. Now that we’ve finished our `menu`, object, let’s use it to create a menu by adding some `appetizers`, `mains`, and `desserts` with the `.addDishToCourse()` function. Add at least 3 dishes to each course (or more if you like!).<br>
 13. Once your menu has items inside it, generate a meal by using the `.generateRandomMeal()` function on your menu, and save it to a variable called `meal`. Lastly, print out your `meal` variable to see what meal was generated for you.

