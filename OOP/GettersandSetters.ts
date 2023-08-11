class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    get sounds():string {
        return this.sound
    }

    set names(u: string) {
        this.name= this.name+u;
    }

    makeSound() {
      console.log(`${this.name} is ${this.sound}`);
    }
  }
  
  const doc2 = new Animal2("Mika", "hh", "qqqq");

  doc2.names="kddkdkdk"
  console.log(doc2.name);
  