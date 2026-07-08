import assert from "assert";
import { Rover } from "../rover/rover.js";
import { position } from "../rover/position.js";

describe("Mars rover", () => {
  it("should initialise the rover at a given position", () => {
    const rover = new Rover(position(2, 3));

    assert.deepStrictEqual(rover.position.x, 2);
    assert.deepStrictEqual(rover.position.y, 3);
  });

  it("should initialise the rover at a given direction", () => {
    const rover = new Rover(position(2, 3), "North");
    assert.strictEqual(rover.direction, "North");
  });
});
