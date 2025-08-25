class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  //static
  static getAreaFormula() {
    return "園面積公視為pi x r x r";
  }
}

let c1 = new Circle(10);
console.log(c1.getArea());
console.log(Circle.getAreaFormula());
