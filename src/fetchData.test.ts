import { fetchData } from "./fetchData";

// test("fetchData 返回结果为 success: true", () => {
//   return fetchData().then(response => {
//     expect(response.data).toEqual({ success: true });
//   });
// });

// test("fetchData 是一个 404", () => {
//   // 表示至少要执行一次 expect 语法，因为如果数据正常返回，我们的 catch 回调就不会执行
//   expect.assertions(1);
//   return fetchData().catch(reason => {
//     expect(reason.toString().indexOf("404") !== -1).toBeTruthy();
//   });
// });

test("fetchData 返回结果为 success: true", async () => {
  await expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true
    }
  });
});

test("fetchData 是一个 404", async () => {
  await expect(fetchData()).rejects.toThrow();
});
