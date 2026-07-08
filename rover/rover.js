export class Rover {
  #position;
  #direction;

  constructor(position, direction) {
    this.#position = position;
    this.#direction = direction;
  }

  get position() {
    return this.#position;
  }

  get direction() {
    return this.#direction;
  }
}
