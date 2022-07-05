import request from "@/utils/request";

// 取得購物車
export function getData() {
  return request({
    url: `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`,
    method: "get"
  });
}