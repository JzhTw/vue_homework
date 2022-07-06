import request from "@/utils/request";

// 取得藝文資料
export function getData() {
  return request({
    url: `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`,
    method: "get"
  });
}
