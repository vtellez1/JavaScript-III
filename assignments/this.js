/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding (Global Binding) - if we do not specify anything for 'this' it will be on the window or global object. Except when it's in strict mode, then it would be undefined. 

* 2. Implicit Binding - The most common seen of the principles. When it is invoked, we can find out what 'this' is referring to by looking the the left of the dot. 

* 3. New Binding - When we use the 'new' keyword, it constructs a new object and 'this' points to it. 

* 4. Explicit Binding - occurs when we use the methods call, apply, or bind. They all allow us to explicitly stat what the 'this' keyword is in a function. Call will immediatly invoke the function and pass arguments one by one. Apply will also immediatly invoke the function but passes arguments as an array. Bind passes arguments one by one but unlike the other two, it does not immediately invoke the function. It returns a brand new function that can be invoked later. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

const sayName = function(){
console.log(this.name);
};

const me = {
    name: "Vanessa"
};

sayName();
window.name = "Jim";
sayName();



// Principle 2
// code example for Implicit Binding

const wizard = {
  name: 'Harry',
  house: 'Gryffindor',
  breakingNews: function(){
    console.log(`You're a wizard, ${this.name}!`);
  }
};

wizard.breakingNews(); 

// Principle 3
// code example for New Binding

function Pet(sound){
  this.noise = sound;
}

const myDog = new Pet('bark, bark');

console.log(myDog.noise);

// Principle 4
// code example for Explicit Binding

const saysHi = function(){
    console.log(`Hi, ${this.name}. How's your day?`);
}

const dwight = {
    name: 'Dwight',
    show: 'The Office',
    position: 'Assistant to the Regional Manager',
};

saysHi.call(dwight);