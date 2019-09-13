import { addDivToBody } from "./demo";
import $ from "jquery";

test("测试添加 div 到 body 上", () => {
  addDivToBody();
  expect($("body").find("div").length).toBe(1);
});
