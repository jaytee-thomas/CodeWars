class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const lemur = new Animal("Lemur", 3, 2, "mammal", "playful");
console.log(lemur.introduce());

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

const greatWhite = new Shark("Great White", 1, "dangerous");
console.log(greatWhite.introduce());

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

const cat = new Cat("Cat", 1, "playful");
console.log(cat.introduce());

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

const dog = new Dog("Dog", 1, "playful", "Master");
console.log(dog.introduce());
