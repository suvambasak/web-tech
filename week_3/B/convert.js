function convert() {
    var fromUnit = parseInt(document.getElementById("from_select").value);
    var toUnit = parseInt(document.getElementById("to_select").value);
    var inputValue = parseInt(document.getElementById("input_value").value);

    console.log(`From ${fromUnit} To ${toUnit}`);
    console.log(`Input value : ${inputValue}`);

    if (!(fromUnit && toUnit)) {
        alert("Please select the conversion unit!");
        return;
    }
    if (isNaN(inputValue)) {
        alert("Input missing!");
        return;
    }

    switch (fromUnit) {
        case 1:
            kmToOther(toUnit, inputValue);
            break;

        case 2:
            mToOther(toUnit, inputValue);
            break;

        case 3:
            mmToOther(toUnit, inputValue);
            break;

        default:
            break;
    }

}

function kmToOther(toUnit, inputValue) {
    var output;
    switch (toUnit) {
        case 1:
            output = inputValue
            break;
        case 2:
            output = inputValue * 1000;
            break;
        case 3:
            output = inputValue * 1000000;
            break;

        default:
            break;
    }
    console.log(`KM to other : ${toUnit} | value(input):  ${inputValue} | value(output):  ${output}`);
    document.getElementById("output_value").value = output;
}

function mToOther(toUnit, inputValue) {
    var output;
    switch (toUnit) {
        case 1:
            output = inputValue / 1000;
            break;
        case 2:
            output = inputValue;
            break;
        case 3:
            output = inputValue * 1000;
            break;

        default:
            break;
    }
    console.log(`M to other : ${toUnit} | value(input):  ${inputValue} | value(output):  ${output}`);
    document.getElementById("output_value").value = output;
}

function mmToOther(toUnit, inputValue) {
    var output;
    switch (toUnit) {
        case 1:
            output = inputValue / 1000000;
            break;
        case 2:
            output = inputValue / 1000;
            break;
        case 3:
            output = inputValue;
            break;

        default:
            break;
    }
    console.log(`MM to other : ${toUnit} | value(input):  ${inputValue} | value(output):  ${output}`);
    document.getElementById("output_value").value = output;
}

