import { screenDisplayNumber } from "./reset";
import { restartButton } from "./reset";

describe("Given a function restartButton", () => {
  describe("When it recieves a click", () => {
    test("Then it should return "${screenDisplayNumber = 0}"", () => {
      const emptySpace = " ";
      const expectedErrorMesage = "You must introduce a number";

      const errorMessage = isEven(emptySpace);

      expect(errorMessage).toBe(expectedErrorMesage);
    });
  });
