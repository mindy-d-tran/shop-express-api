function renderPage (arr){
    let rows =""
    if(arr.length){
        arr.forEach(element => {
            rows+="<tr>"
            for(const key in element){
                rows += `<td>${element[key]}</td>`;
            }
            rows+="</tr>";
        });
    } else {
        rows+="<tr>"
            for(const key in arr){
                rows += `<td>${arr[key]}</td>`;
            }
            rows+="</tr>";
    }
    return rows;
}
module.exports = renderPage;