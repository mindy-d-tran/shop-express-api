const objToTR = (str, obj)=>{
  str+="<tr>";
  for (const key in obj) {
    if(key === "orderList") str += `<td><a href="/api/orders/${obj.id}/orderList">[...]</a></td>`;
    else str += `<td>${obj[key]}</td>`;
  }
  str+="</tr>"
  return str;
}
function renderPage(arr) {
  let rows = "";
  if (arr.length) {
    arr.forEach((element) => {
      rows += objToTR("", element);
    });
  } else {
    rows = objToTR(rows, arr);
  }
  return rows;
}
module.exports = renderPage;
