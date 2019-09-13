jest.mock("./demo");
import { fetchData } from "./demo";
const { getNumber } = jest.requireActual("./demo");
test("fetchData 测试", () => {
  return fetchData().then(data => {
    expect(eval(data)).toBe("123");
  });
});

test("getNumber 测试", () => {
  return expect(getNumber()).toBe(123);
});
