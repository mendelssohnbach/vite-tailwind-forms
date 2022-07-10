export class Person {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    console.log(`${this.id} is registered`);
  }
}

const prem = new Person(1, 'Prem Kumar');
const kumar = new Person(2, 'Kumar Kumar');
prem.register();
