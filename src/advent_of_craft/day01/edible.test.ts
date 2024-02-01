
const { add, sub } = require("date-fns");
import { v4 as uuid } from "uuid";
import { Food } from "./Food";

describe("Edible tests", () => {
  const expirationDate = new Date(2023, 1, 12);
  const inspector = uuid();
  const notFreshDate = add(expirationDate, {
    days: 7,
  });
  const freshDate = sub(expirationDate, {
    days: 7,
  });

  it.each([
    [notFreshDate, true, inspector],
    [freshDate, false, inspector],
    [freshDate, true, null],
    [notFreshDate, false, null],
    [freshDate, false, null],
  ])(
    "should return false if food is not edible",
    (now, approvedForConsumption, inspectorId) => {
      const food = new Food({
        expirationDate,
        approvedForConsumption,
        inspectorId,
      });
      expect(food.isEdible(now)).toBeFalsy();
    }
  );

  it("should return true if food is edible", () => {
    const food = new Food({
      expirationDate,
      approvedForConsumption: true,
      inspectorId: inspector,
    });
    expect(food.isEdible(freshDate)).toBeTruthy();
  });
});
