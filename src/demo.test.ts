import { getUserData, myFunction, runcallback, specialMethod } from "./demo";
import axios from "axios";

jest.mock("axios");

// @ts-ignore
specialMethod = jest.fn();

const axios_mock = axios as jest.Mocked<typeof axios>;

test("测试 runCallback", () => {
  const func = jest.fn();
  runcallback(func);
  expect(func).toBeCalled();
});

test("测试 func 被调用 2 次", () => {
  const func = jest.fn();
  runcallback(func);
  runcallback(func);
  expect(func).toBeCalledTimes(2);
});

test("测试 func 的返回值", () => {
  const func = jest.fn();
  func.mockReturnValue("test");
  expect(func()).toBe("test");
});

test("测试 请求是否能够发送", async () => {
  // jest.mock 模拟了 axios 的行为
  axios_mock.get.mockResolvedValue({ name: "zzh" });
  await getUserData().then(data => {
    expect(data).toEqual({ name: "zzh" });
  });
});

test("执行 myFunction 会执行 specialMethod 方法", () => {
  myFunction();
  expect(specialMethod).toBeCalled();
});
