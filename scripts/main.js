function getValidCharacters(specialCharactersAllowed, numbersAllowed) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "`~!@#$%^&*()-_=+[{]};:'<,>.?/".concat('"');
    const numbers = "1234567890";

    // console.log(alphabet);
    // console.log(specialCharacters);
    // console.log(numbers);

    let validCharacters = alphabet;
    if (specialCharactersAllowed === true) {
        console.log("..."); validCharacters.concat(specialCharacters);
    }
    if (numbersAllowed === true) { validCharacters.concat(numbers); }

    console.log(validCharacters);
    return validCharacters;
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function createRandomCharacterSequence(length, characters) {
    let charactersSequence = "";

    for (let index = 0; index < length; index++) {
        const randomIndex = randomInRange(0, characters.length - 1);
        charactersSequence += characters.at(randomIndex);
    }

    return charactersSequence;
}

function createNewPassword() {
    const passwordHeader = document.getElementById("password");
    const passwordLength = document.getElementById("lengthControl").value;
    const specialCharactersAllowed = document.getElementById("specialCharactersControl").checked;
    const numbersAllowed = document.getElementById("numbersControl").checked;

    // console.log(passwordHeader.innerHTML);
    // console.log(passwordLength);
    // console.log(specialCharactersAllowed);
    // console.log(numbersAllowed);

    const validCharacters = getValidCharacters(specialCharactersAllowed, numbersAllowed);
    passwordHeader.innerHTML = createRandomCharacterSequence(passwordLength, validCharacters);
};

const controlsForm = document.getElementById("controlsForm");

function handleCreateNewPassword(event) {
    event.preventDefault();
    createNewPassword();
};

controlsForm.addEventListener('submit', handleCreateNewPassword);
