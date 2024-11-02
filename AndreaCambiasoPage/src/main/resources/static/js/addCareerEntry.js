
document.getElementById("addCareerEntryButton").addEventListener("click", function(event) {
    console.log("bottone cliccato");
    document.getElementById("careerForm").style.display = "block";
});


document.getElementById("newCareerEntryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const year = document.getElementById("year").value;
    const team = document.getElementById("team").value;
    const role = document.getElementById("role").value;
    const match = document.getElementById("match").value;
    const goal = document.getElementById("goal").value;

    const tableBody = document.getElementById("careerTable").getElementsByTagName('tbody')[0];
    addRow(tableBody , year , team , role,match,goal);

    document.getElementById("careerForm").style.display = "none";
    document.getElementById("newCareerEntryForm").reset();

});
function addRow(tableBody , year,team,role,match,goal) {

    const newRow=document.createElement('tr')
    newRow.innerHTML = `
        <tr>
            <td>${year}</td>
            <td>${team}</td>
            <td>${role}</td>
            <td>${match}</td>
            <td><span class="badge bg-dark">${goal}</span></td>
            <td><button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;
    tableBody.appendChild(newRow);
    const newButton = newRow.querySelector(".deleteButton");
    newButton.addEventListener("click", function () {
        console.log("nuovo bottone premuto")
        newRow.remove();
    });
}
