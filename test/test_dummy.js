import assert from "assert";
import { Rover } from "./rover.js";

describe("Mars rover", () => {
  it("should initialise the rover at a given position", () => {
    const rover = new Rover();
    assert.deepStrictEqual(rover.position, { x: 2, y: 3 });
  });
});
