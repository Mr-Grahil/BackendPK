fetch("./data.json").then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value)
    function buildTable(data){
        var table = document.getElementById('bodyTable')
        for(let i=0;i<data.length;i++){
            var row = `
                    <tr>
                        <td>${data[i].first_name}</td>
                        <td>${data[i].last_name}</td>
                        <td>${data[i].street}</td>
                        <td>${data[i].address}</td>
                        <td>${data[i].city}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].phone}</td>
                    </tr>
                    `
            table.innerHTML +=row
        }
    }
    buildTable(value)
})