import translations from "./translations.js";
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "en") {
        document.getElementById("navUl").style.marginLeft = "auto";
        document.getElementById("navUl").style.marginRight = "0";
        document.getElementById("servicesVideo").style.display = "none";
        document.getElementById("header").style.transform = "scaleX(-1)";
        document.getElementById("innerHeader").style.transform = "scaleX(-1)";
        document.getElementById("body").style.fontFamily = "Roboto";
        document.getElementById("navUl").style.fontSize = "22px";
        document.getElementById("navUl").style.fontWeight = "500";
        // document.getElementById("header").style.backgroundPosition = "right";
        // document.getElementById("header").style.backgroundRepeat = "no-repeat";
        // document.getElementById("header").style.backgroundSize = "contain";
        // document.getElementById("header").style.height = "508px";


    } else {
        document.getElementById("navUl").style.marginRight = "auto";
        document.getElementById("navUl").style.marginLeft = "0";
        document.getElementById("servicesVideo").style.display = "inline";
        document.getElementById("header").style.transform = "scaleX(1)";
        document.getElementById("innerHeader").style.transform = "scaleX(1)";
        document.getElementById("body").style.fontFamily = "Cairo";
        document.getElementById("navUl").style.fontSize = "20px";
        document.getElementById("navUl").style.fontWeight = "600";

    }
};