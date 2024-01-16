function renderPage (arr){
    let rows =""
    arr.forEach(element => {
        rows+="<tr>"
        for(const key in element){
            rows += `<td>${element[key]}</td>`;
        }
        rows+="</tr>";
    });
    return rows;
}
module.exports = renderPage;