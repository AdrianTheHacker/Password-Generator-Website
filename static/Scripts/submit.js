let results = {};

function get_values() {
    let id_list = [
        "length",
        "eng_alpha",
        "caps",
        "numbers"
    ];

    for(let i = 0; i < id_list.length; i++) {
        let element = document.getElementById(id_list[i]);

        if(element.type == "number") {
            console.log(element.value);
            results[element.id] = element.value;
        }

        else {
            console.log(element.checked);
            results[element.id] = element.checked;
        }
    }
    console.log(results);
}

let button = document.getElementById("submit");
button.addEventListener("click", get_values);