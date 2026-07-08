export class Rover {
  #x;
  #y;
  #direction;

  constructor(x, y, direction) {
    this.#x = x;
    this.#y = y;
    this.#direction = direction;
  }

  get position() {
    return { x: this.#x, y: this.#y };
  }

  get direction() {
    return this.#direction;
  }
}
