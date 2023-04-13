import { incrementButton } from "../main";

describe("Given a function incrementButton", () => {
  describe("When numbers increments in `1`", () => {
    describe("Then the counter must be `1`" () => {
      const incrementButton = document.querySelector(".increment");
      const screenDisplayNumber = document.querySelector(".number");

      let number = parseInt(screenDisplayNumber.textContent);

      incrementButton.dispatchEvent(new MouseEvent('click'));
      number += 1;

      expect(screenDisplayNumber.textContent).toBe(1);
    }
  )}
)});
