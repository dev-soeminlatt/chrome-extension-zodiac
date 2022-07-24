document.getElementById("logout").addEventListener("click", logout);

function getZodiacToday(zodiacSign) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 1000,
        'type': 'POST',
        'url': 'https://aztro.sameerkumar.website/?sign=' + zodiacSign + '&day=today',
        'async': false,
        'success': function (result) {
            //document.getElementById("date-range").innerHTML = result.date_range;
            document.getElementById("zodiac").innerHTML = zodiacSign;
            document.getElementById("user-name").innerHTML = localStorage.getItem("user_name");
            document.getElementById("description-answer").innerHTML = result.description;
            document.getElementById("compatibility-answer").innerHTML = result.compatibility;
            document.getElementById("mood-answer").innerHTML = result.mood;
            document.getElementById("color-answer").innerHTML = result.color;
            document.getElementById("lucky-number-answer").innerHTML = result.lucky_number;
            document.getElementById("lucky-time-answer").innerHTML = result.lucky_time;

        },
        'error': function (result) { },
    });
}

function logout() {
    localStorage.setItem("zodiac_sign", "");
    localStorage.setItem("user_name", "");
    chrome.action.setPopup({ popup: '/zodiac-subscribe/zodiac-subscribe.html' });
    window.location.replace('/zodiac-subscribe/zodiac-subscribe.html');
}