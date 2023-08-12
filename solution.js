//1
let printObjectProperties=(object)=>{
    if(Object.keys(object).length===0){
        console.log("Object is empty");
    }
    else{
        for(let props in object){
            console.log(props+": "+object[props])
        }
    }
}
const person1 = {name: "Imran Nazir", roll: 180601, department: "ICE", university: "PUST", district: "Pabna", mobile: "01797623634"};
const person2 = {};
console.log("---------1-----------");
printObjectProperties(person1);
printObjectProperties(person2);


//2
function findMaxNumber(arr){
    if(arr.length > 0){
        let max =  Math.max(...arr);
        return max;
    }
    else{
        return null;
    }
}
const numbers1 = [10, 20, 5, 30, 25];
const emptyArray = [];
console.log("----------2----------");
console.log(findMaxNumber(numbers1));
console.log(findMaxNumber(emptyArray));


//3
function mergeArrays(arr1, arr2){
    let arr = [...arr1, ...arr2]
    return arr;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log("----------3----------");
console.log(mergeArrays(arr1, arr2));


//4
let calculateSquare=(num)=>{
    return Math.pow(num,2);
}
console.log("----------4----------");
console.log(calculateSquare(5));
console.log(calculateSquare(8));


//5
let doubleNumbers =(arr)=>{
    return arr.map(arr=>arr*2);
}
const number = [1, 2, 3, 4, 5];
console.log("----------5----------");
console.log(doubleNumbers(number));


//6
class MathUtility{
    static multiply(num1, num2){
        return num1*num2;
    }
}
console.log("----------6----------");
console.log(MathUtility.multiply(5, 3));
console.log(MathUtility.multiply(2, 8)); 


//7
class Animal{
    constructor(name, sound){
        this.name= name;
        this.sound = sound;
    }
    makeSound(){
        console.log("\""+this.sound+"\"");
    }
}
class Dog extends Animal{
    fetch(){
        console.log("\"Fetching the ball!\"");
    }
}
console.log("----------7----------");
const animal = new Animal("Lion","Roar");
animal.makeSound();
const dog = new Dog("Buddy", "Woof");
dog.makeSound(); 
dog.fetch();


//8
class Person{
    constructor(name, age, major){
        this.name = name;
        this.age = age;
        this.major = major;
    }
    introduce(){
        console.log(`\"Hello, my name is ${this.name} and I am ${this.age} years old.\"`);
    }
}
class Student extends Person{
    introduce(){
        console.log(`\"Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.\"`);
    }
}
console.log("----------8----------");
const person_1 = new Person("John", 30);
person_1.introduce();
const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce();



