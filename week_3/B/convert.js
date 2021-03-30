// Function for validation and calling right function based on unit.
function convert() {
    // Taking conversion unit and value.
    var fromUnit = parseInt(document.getElementById("from_select").value);
    var toUnit = parseInt(document.getElementById("to_select").value);
    var inputValue = parseInt(document.getElementById("input_value").value);

    // Log
    console.log(`From ${fromUnit} To ${toUnit}`);
    console.log(`Input value : ${inputValue}`);

    // Validation of unit.
    if (!(fromUnit && toUnit)) {
        alert("Please select the conversion unit!");
        return;
    }
    // Validation of input value.
    if (isNaN(inputValue)) {
        alert("Input missing!");
        return;
    }

    // Calling function based on input unit.
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

// Function for convert from kilometer to any other unit.
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
    // Log.
    console.log(`KM to other : ${toUnit} | value(input):  ${inputValue} | value(output):  ${output}`);
    // Update the output with converted value
    document.getElementById("output_value").value = output;
}

// Function for convert from meter to any other unit.
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

    // log.
    console.log(`M to other : ${toUnit} | value(input):  ${inputValue} | value(output):  ${output}`);
    // Update the output with converted value.
    document.getElementById("output_value").value = output;
}

// Function for convert from milimeter to any other unit.
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

    // Log.
    console.log(`MM to other : ${toUnit} | value(input):  ${inputValue} | value(output):  ${output}`);
    // Update the output with converted value.
    document.getElementById("output_value").value = output;
}

