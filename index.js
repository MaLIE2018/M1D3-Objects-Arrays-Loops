/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
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

//console.log(cars)

carsForRent = [...cars]
carsForSale = [cars[0], cars[1], cars[2]]

totalCars = carsForRent.length + carsForSale.length


for (const car of carsForSale) {
    console.log(car.brand, '\n', car.model, '\n', car.licensePlate)
}