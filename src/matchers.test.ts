// toBe 类似 object.is 无法比较对象
// toEqual 可以比较对象相等
// toBeNull 等于 null
// toBeUndefined 等于 undefined
// toBeDefined 被定义过的

test("测试10与10相匹配", () => {
  expect(10).toBe(10);
});

test("两个对象相等", () => {
  const a = { name: 1 };
  expect(a).toEqual({ name: 1 });
});

test("a 等于 null", () => {
  const a = null;
  expect(a).toBeNull();
});

test("a 等于 undefined", () => {
  const a = undefined;
  expect(a).toBeUndefined();
});

test("a 被定义了", () => {
  const a = "1";
  expect(a).toBeDefined();
});

test("a 是个真值", () => {
  const a = "2";
  expect(a).toBeTruthy();
});

test("a 是个假值", () => {
  const a = 0;
  expect(a).toBeFalsy();
});

test("a 不是个假值", () => {
  const a = "3";
  expect(a).not.toBeFalsy();
});

test("3 小于 10", () => {
  const a = 3;
  expect(a).toBeLessThan(10);
});

test("0.1 + 0.2 = 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test("zzh 包含 z", () => {
  const a = "zzh";
  expect(a).toMatch("z");
});

test("[1, 2, 3] 包含 3", () => {
  const a = [1, 2, 3];
  expect(a).toContain(3);
});

test("函数可以抛出异常", () => {
  const a = () => {
    throw new Error("fuck");
  };
  expect(a).toThrow();
});
