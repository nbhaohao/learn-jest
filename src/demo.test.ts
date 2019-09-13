// jest.mock 发现 util 是个类，则会把类的构造函数和方法转换为 jest.fn()
// 我们还可以创建 __mocks__ 文件夹来提供 util 这个文件
// 还可以在 jest.mock 后面跟一个函数，
// jest.mock('./util')
jest.mock("./util", () => {
  const Util = jest.fn();
  Util.prototype.a = jest.fn(() => {
    console.log("通过 jest.mock 的 factory 参数创建");
  });
  Util.prototype.b = jest.fn();
  return {
    Util
  };
});
import { demoFunction } from "./demo";
import { Util } from "./util";

const Util_Mock = Util as jest.MockedClass<typeof Util>;

test("测试 demoFunction", () => {
  demoFunction(1, 2);
  expect(Util_Mock).toHaveBeenCalled();
  expect(Util_Mock.mock.instances[0].a).toHaveBeenCalled();
  expect(Util_Mock.mock.instances[0].b).toHaveBeenCalled();
});
