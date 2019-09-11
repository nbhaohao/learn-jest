import { generateConfig } from "./demo";

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
});

test("测试 generateConfig 函数 inline snapshot", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": 80,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
