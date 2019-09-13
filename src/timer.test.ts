import { timer } from "./timer";

// 使用 jest 模拟 timers
jest.useFakeTimers();

test("timer 测试", () => {
  const fn = jest.fn();
  timer(fn);
  // 调用 jest 的所有 timers
  // jest.runAllTimers();
  // 只执行当前处于队列中的计时器
  // jest.runOnlyPendingTimers();
  // 让时间快进 2 秒
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});
