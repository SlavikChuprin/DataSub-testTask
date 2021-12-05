class AClass {
  constructor(n) {
    // this.numbers = n;
    this.Numbers = [];
    this.#fill(n);
  }
  #fill = (n) => {
    while (this.Numbers.length < n) {
      this.Numbers.push(Math.floor(Math.random() * 10));
    }
    return this.Numbers;
  };

  factorial() {
    return this.Numbers.map((num) => {
      let newNum = 1;
      for (let i = num; i >= 1; i -= 1) {
        newNum = newNum * i;
      }
      return newNum;
    });
  }

  sort() {
    return this.Numbers.sort((a, b) => a - b);
  }
}

class Class1 extends AClass {
  constructor(n) {
    super(n);
  }

  sort() {
    this.Numbers.sort((a, b) => a - b);

    return super.factorial();
  }
}

class Class2 extends AClass {
  constructor(n) {
    super(n);
  }
  sort() {
    this.Numbers.sort((a, b) => b - a);

    return super.factorial();
  }
}

// Проверка работы классов
// const classA = new AClass(10);

// console.log(classA);
// console.log(classA.factorial());

// const classB = new Class1(10);
// console.log(classB.sort());

// const classC = new Class2(5);
// console.log(classC.sort());
