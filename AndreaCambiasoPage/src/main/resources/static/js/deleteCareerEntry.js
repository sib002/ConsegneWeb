
document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function () {
        const row = button.closest('tr');
        row.parentNode.removeChild(row);
    });
});

document.getElementById("deleteCareerEntryButton").addEventListener("click",function () {
    const table=document.getElementById("careerTable");
    const lastRow=table.rows.length;
    if(lastRow>1)
        table.deleteRow(lastRow-1);
});

