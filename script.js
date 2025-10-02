document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("changeColor");

    btn.addEventListener("click", () => {
        document.body.style.background =
            document.body.style.background === "aliceblue" ?
            "lightblue" :
            "aliceblue";
    });
});