class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`${this.name} is ${this.sound}`);
  }
}

const doc = new Animal("Mika", "hh", "qqqq");

class Man {
  constructor(
    public name: string,
    public age: number,
    public profession: string
  ) {}
  answerQuestion() {
    console.log(
      `this man's name is ${this.name} and his age is ${this.age}. His profession is ${this.profession}`
    );
  }
}

const ress = new Man("Shaker", 23, "Web Developer");
console.log(ress);
