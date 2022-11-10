
const uploadPhoto = () => {

    const imgInput = document.querySelector('#uploadImage');
    console.log("imgInput", imgInput.value);
    const file = imgInput.files;
    if (file) {
        const fileReader = new FileReader();
        const uploadedImage = document.getElementById('imageHolder');
        fileReader.onload = function (event) {
            uploadedImage.setAttribute('src', event.target.result);
        }
        fileReader.readAsDataURL(file[0]);
    }
}
let imageDetails = {};
let imageDetailsList = [];
let inputName = "";
function openPopup() {

    document.getElementById('myPopup').style.display = "block";

}
function submitName(event) {

    inputName = document.getElementById('nameInput').value;
    imageDetails = { "name": inputName, "x_cord": event.offsetX, "y_cord": event.offsetY };
    imageDetailsList.push(imageDetails);
    createTable(imageDetailsList);
    imageDetailsList = [];
    document.getElementById('myPopup').style.display = "none";


}
function closePopup() {
    document.getElementById('myPopup').style.display = "none";
}
let newTable = document.createElement("table");
newTable.innerHTML = '<thead><th>Description</th><th>X Pos</th><th>Y Pos</th></thead>';
newTable.style.border = '1px solid black';
newTable.style.backgroundColor = '#D3D3D3';
function createTable(imageDetails) {

    for (const item of imageDetails) {
        const newRow = document.createElement("tr");
        newRow.style.border = '1px solid black';
        const tdName = document.createElement("td");
        const tdXPos = document.createElement("td");
        const tdYPos = document.createElement("td");

        tdName.textContent = item.name;
        tdXPos.textContent = item.x_cord;
        tdYPos.textContent = item.y_cord;

        newRow.appendChild(tdName);
        newRow.appendChild(tdXPos);
        newRow.appendChild(tdYPos);

        newTable.appendChild(newRow);
    }
    let tableData = document.getElementById('tableData');
    tableData.appendChild(newTable);
}