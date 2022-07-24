const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

//load zodiac data
window.addEventListener("load", async (evt) => {
    localStorage.setItem("zodiac_sign", "");
    localStorage.setItem("user_name", "");
    document.getElementById('datePicker').valueAsDate = new Date();
});


window.addEventListener('submit', (event) => {
    event.preventDefault();
    var sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', { month: 'numeric' }).format(new Date($('#datePicker').val()))) - 1;
    localStorage.setItem("zodiac_sign", signs[sign]);
    localStorage.setItem("user_name", document.getElementById("username").value);
    chrome.action.setPopup({ popup: '/zodiac-today/zodiac-today.html' });
    window.location.replace('/zodiac-today/zodiac-today.html');

});