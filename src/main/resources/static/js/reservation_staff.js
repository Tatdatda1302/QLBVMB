const dl_remove_class = document.getElementById("dialog_remove_class");
const btnRemoveClass = document.getElementById("btnRemoveClass");
const btnConRemoveClass = document.getElementById("confirmRemoveClass");
const btnCanRemoveClass = document.getElementById("cancelRemoveClass");

btnRemoveClass.addEventListener("click", function () {
  dl_remove_class.showModal();
});
btnCanRemoveClass.addEventListener("click", function (e) {
  dl_remove_class.close();
});
btnConRemoveClass.addEventListener("click", function () {});

const dl_remove_pass = document.getElementById("dialog_remove_pass");
const btnRemovePass = document.getElementById("btnRemovePass");
const btnConRemovePass = document.getElementById("confirmRemovePass");
const btnCanRemovePass = document.getElementById("cancelRemovePass");

btnRemovePass.addEventListener("click", function () {
  dl_remove_pass.showModal();
});
btnCanRemovePass.addEventListener("click", function (e) {
  dl_remove_pass.close();
});
btnConRemovePass.addEventListener("click", function () {});
