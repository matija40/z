var car = {
    manufacturer: "Renault",
    year: "2017",
    color: "Blue",
    speed: function speed(x) {
        console.log("Prebaci u", x, "brzinu")
    },
    brake: function brake(x) {
        console.log("Molim te", x, "i uključi", car.lights.long, "svjetla")
    },
    lights: {
        long: "duga",
        short: "kratka"
    },
    fuel: function fuel(x) {
        console.log("Napuni", x, "goriva")
    }
};
for (var property in car) {

    console.log(`${property}: ${car[property]}`);
}
var myJSON = JSON.stringify(car);

car.speed(5);
car.brake("uspori");
car.fuel("20 litara");
console.log(myJSON);
