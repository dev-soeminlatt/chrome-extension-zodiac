var description = "";
//load zodiac data
window.addEventListener("load", async (evt) => {
    getZodiacToday(localStorage.getItem("zodiac_sign"));
});