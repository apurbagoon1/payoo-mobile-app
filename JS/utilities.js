function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convetedValue = parseFloat(value);
    return convetedValue;
}

function setInnerTextByIDandValue(id,value) {
    document.getElementById(id).innerText = value;
}

function handleToggle(id,status) {
    document.getElementById(id).style.display = status;
}