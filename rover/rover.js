export class Rover {
  #x;
  #y;

  constructor() {
    this.#x = 2;
    this.#y = 3;
  }

  get position() {
    return { x: this.#x, y: this.#y };
  }
}
