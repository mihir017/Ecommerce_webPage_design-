const aqua = document.getElementById("aqua");
const bisque = document.getElementById("bisque");
const pink = document.getElementById("pink");
const yellow = document.getElementById("yellow");
const container = document.getElementById("container");
const changeColorBtn = document.getElementById("changeColorBtn");

const changeBackground = (e) => {
    container.style.backgroundColor = e.target.className;
    changeColorBtn.style.backgroundColor = e.target.className;
};
aqua.addEventListener("click", changeBackground);
bisque.addEventListener("click", changeBackground);
pink.addEventListener("click", changeBackground);
yellow.addEventListener("click", changeBackground);
