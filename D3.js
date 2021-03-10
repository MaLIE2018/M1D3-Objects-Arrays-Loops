/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

myArray = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const person = {
    name: "Max",
    surname: "Liebsch",
    email: "liebsch@pn.me",
    age: 25,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

person.hasdriverlicense = true

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete person.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const person2 = {
    name: "Carl",
    surname: "Meschugge",
    email: "meschugge@pn.me",
    age: 32,
}

console.log(person.email === person2.email)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 51
let totalCost = null
let shippingCost = 10
let message = ''
let BlackFriday = true

if (BlackFriday) {
    totalShoppingCart = Math.round(totalShoppingCart * 0.8 * 100) / 100
}

if (totalShoppingCart > 50) {
    totalCost = totalShoppingCart
    message = "You are eligible for free shipping. The total costs are " + totalCost
} else {
    totalCost = totalShoppingCart + shippingCost
    message = "Your total costs are " + totalCost
}

console.log(message)

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

//see above

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let cars = []

const car = {
    brand: "Fiat",
    model: "500",
    licensePlate: "AA 214 RE"

}

for (let i = 0; i < 5; i++) {
    cars[i] = eval('car' + i + ' = {}')
    cars[i] = Object.assign({}, car)
    cars[i].licensePlate = 'AA ' + '21' + i + 5 + ' RE'
}

console.log('Initial carSet', cars)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

carsForRent = [...cars]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift()
carsForRent.pop()

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log("TYPES: ", typeof(car), '\n', typeof(car.brand), '\n', typeof(car.licensePlate))

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

carsForSale = [cars[0], cars[1], cars[2]]

totalCars = carsForRent.length + carsForSale.length

console.log('Total cars', totalCars)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for (const car of carsForSale) {
    console.log(car.brand, '\n', car.model, '\n', car.licensePlate)
}

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/