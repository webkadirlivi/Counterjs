//başlangıç sayımız hesap için
let count = 0;

//DOM ile buttons ve sayı
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//her buttonun tıklandıüında event.currentTarget.classList
//bulundurdugu classları döngü ile kontrol ederek işlemleri yaptık
btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("dec")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    //change color dec or inc
    if (count > 0) {
      value.style.color = "blue";
    } else if (count < 0) {
      value.style.color = "red";
    } else if (count == 0) {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});
