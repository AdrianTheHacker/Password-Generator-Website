


// copyText.select();
// copyText.setSelectionRange(0, 99999); // For mobile devices

//  // Copy the text inside the text field
// navigator.clipboard.writeText(copyText.value);

function copyText(event) {
    console.log("copying text");
    const password = document.getElementById("password");

    navigator.clipboard.writeText(password.innerHTML);
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyText);