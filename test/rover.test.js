import assert from "assert";
import { Rover } from "../rover/rover.js";

describe("Mars rover", () => {
  it("should initialise the rover at a given position", () => {
    const rover = new Rover(2, 3);
    assert.deepStrictEqual(rover.position, { x: 2, y: 3 });
  });
});
