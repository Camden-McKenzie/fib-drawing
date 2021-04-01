class Point {
  constructor(x, y, size = 1) {
    this.x = x;
    this.y = y;
    this.size = size
  }

  addX(amount) {
    this.x += amount * this.size
  }

  addY(amount) {
    this.y += amount * this.size
  }

  turn(rad, amount) {
    this.addX(amount * Math.cos(rad))
    this.addY(amount * Math.sin(rad))
  }

  copy() {
    let copy = self
    return copy
  }
}

class DirectionGenerator {
  constructor(rad) {
    this.step = rad
    this.current = 0
  }

  next() {
    this.current = this.current + this.step
    return this.current
  }
}

class Line {
  constructor(x, y, size = 1) {
    this.a = new Point(x, y, size)
    this.b = new Point(x, y, size)
  }

  turn(rad, amount) {
    this.a = this.b
    this.b = this.a
    this.b.turn(rad, amount)
  }
}

let canvas = document.querySelector("canvas").getContext("2d");

let pos = new Line(400, 450, 1)
let gen = new DirectionGenerator(Math.PI / 2)

let current = 1;
let prev = 1;
let direction = 0;

canvas.fillStyle = 'green'

canvas.beginPath();
for (let i = 0; i < 40; i += 1) {

  temp = current
  current = current + prev
  prev = temp

  canvas.lineTo(pos.b.x, pos.b.y)

  pos.turn(gen.next(), current)

}
canvas.stroke();