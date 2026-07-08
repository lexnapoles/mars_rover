export class Rover {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get position() {
    return { x: this.#x, y: this.#y };
  }
}
