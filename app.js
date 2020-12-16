document.querySelector('#btn').addEventListener('keyup', (e) => {
    const value = document.querySelector('#btn').value.toUpperCase();
    // console.log(value)
    let rows = document.querySelector('table tbody').rows;
    let targetvalue = e.target.value.toUpperCase();
   console.log(targetvalue)
    //  console.log(rows)
    for (let i = 0; i < rows.length; i++) {
        //  console.log(rows[i])
        const cells = rows[i].cells;
        // console.log(cells)
        for (let j = 0; j < cells.length; j++) {
            let rowContent = cells[j].textContent;
            // console.log(rowContent)
            if(rowContent.toUpperCase().includes(targetvalue)){
                    rows[i].style.display = "";
            }else{
                    rows[i].style.display = "none";

            }
        }
    }
})