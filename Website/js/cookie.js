// to get current year
function getYear() {
    let currentDate = new Date();
    let displayYearElement = document.querySelector("#displayYear");
    if (displayYearElement) {
        displayYearElement.innerHTML = currentDate.getFullYear().toString();
    }
}

function showPopup() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('popupShown='))) {
        return;
    }

    let popup = document.createElement("div");
    popup.innerHTML = `
        By continuing to use this website, you agree to the 
        <a href="https://github.com/DefinetlyNotAI/WesHacks/blob/main/LICENSE.md" target="_blank" style="color: #fff; text-decoration: underline;">Terms and Conditions</a>.
        <br>
        <input type="checkbox" id="confirmCheckbox"> I agree to the Terms and Conditions
    `;
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.backgroundColor = "#333";
    popup.style.color = "#fff";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    const checkbox = document.getElementById("confirmCheckbox");

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.cookie = "popupShown=confirmed; max-age=" + 60 * 60 * 24 * 30 * 12; // 12 months
            closePopup();
        }
    });

    setTimeout(() => {
        if (!checkbox.checked) {
            document.cookie = "popupShown=passive; max-age=" + 60 * 60 * 24 * 30 * 12; // 12 months
            closePopup();
        }
    }, 10000);

    function closePopup() {
        popup.style.transition = "opacity 0.5s";
        popup.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 500);
    }
}

getYear();
