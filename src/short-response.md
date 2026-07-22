# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1
Inheritence is an object-oriented programming concept where one class, called a child or sub-class, can reuse or extend the properties and methods of another parent or superclass. Inheritence allows shared behavior to be written once and reused across the related sub-classes. This reduces repeating code. Without inheritence, the same logic would have to be written out in many different places, which can be messy and holds more errors.
---

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() { return "eating"; }
}

class Dog extends Animal {
  bark() { return "woof"; }
}

class Puppy extends Dog {
  play() { return "playing"; }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 2
When `rex.eat()` is called, Javascript first looks for the `eat` method on the `Puppy` class since `rex` is an instance of the `Puppy` class. Since the `Puppy` class does not define it, Javascript follows the prototype chain up to `Dog`, and again the `eat` method is not defined there, so it goes up to `Animal` where eat is actually defined. This works because of inheritance, which allows `Puppy` to inherit methods from both `Dog` and `Animal`. As a result, `rex` can access methods defined higher up in the class hierarchy.
--- 

## Prompt 3

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary)
    this.department = department
  }
  getDetails() {
    return `${super.getDetails()} and manages the ${this.department} department`
  }
}
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3
The `super` keyword is needed in the constructor to call the parent class's constructor and properly use any inherited properties like `name` and `salary`. Without calling `super`, `this` cannot be used and an error will be thrown. In `getDetails` `super` allows the `Manager` class to reuse the `Employee` version of the method and extend it with any additional changes. 