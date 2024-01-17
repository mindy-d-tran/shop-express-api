const objToTR = (obj, url) => {
  let str = "<tr>";
  for (const key in obj) {
    if (key === "orderList")
      str += `<td><a href="/api/${url}/${obj.id}/orderList">[...]</a></td>`;
    else
      str += `<td><a href="/api/${url}/${obj.id}">${obj[key]}</a></td>`;
  }
  str += "</tr>";
  return str;
};
function renderPage(arr, str) {
  let rows = "";
  if (arr.length) {
    arr.forEach((element) => {
      rows += objToTR(element, str);
    });
  } else {
    rows += objToTR(arr, str);
  }
  return rows;
}
module.exports = renderPage;
