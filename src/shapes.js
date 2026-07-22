/* eslint-disable max-classes-per-file */

class Shape {
  constructor(type) {
    this.type = type;
  }

  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super('Rectangle');
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.type = 'Square';
  }
}

module.exports = {
  Shape,
  Circle,
  Rectangle,
  Square,
};
