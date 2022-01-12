let getLang = localStorage.getItem("langDir");
if (getLang) {
  if (getLang == "rtl") {
    changeDir("rtl");
  } else {
    changeDir("ltr");
  }
}
// Language Direction
let en = document.getElementById("enLang");
let ar = document.getElementById("arLang");

en.addEventListener("click", () => changeDir("ltr"));
ar.addEventListener("click", () => changeDir("rtl"));
function changeDir(dir) {
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("langDir", dir);
}
