//  nois chung phan nay thi sao chep het vao
const dl_add_class = document.getElementById('dialog_add_class');
const btnAddClass = document.getElementById('btnAddClass');
const btnConAddClass = document.getElementById('confirmAddClass');
const btnCanAddClass = document.getElementById('cancelAddClass');
btnAddClass.addEventListener("click", function() {
    dl_add_class.showModal();
});
btnConAddClass.addEventListener("click", function() {});
btnCanAddClass.addEventListener("click", function() {
    dl_add_class.close();
});


const dl_update_class = document.getElementById('dialog_update_class');
const btnUpdateClass = document.getElementById('btnUpdateClass');
const btnConUpdateClass = document.getElementById('confirmUpdateClass');
const btnCanUpdateClass = document.getElementById('cancelUpdateClass');

btnUpdateClass.addEventListener("click", function() {
    dl_update_class.showModal();
});
btnCanUpdateClass.addEventListener("click", function(e) {
    dl_update_class.close();
});
btnConUpdateClass.addEventListener("click", function() {});


const dl_remove_class = document.getElementById('dialog_remove_class');
const btnRemoveClass = document.getElementById('btnRemoveClass');
const btnConRemoveClass = document.getElementById('confirmRemoveClass');
const btnCanRemoveClass = document.getElementById('cancelRemoveClass');

btnRemoveClass.addEventListener("click", function() {
    dl_remove_class.showModal();
});
btnCanRemoveClass.addEventListener("click", function(e) {
    dl_remove_class.close();
});
btnConRemoveClass.addEventListener("click", function() {});





const dl_add_pass = document.getElementById('dialog_add_pass');
const btnAddPass = document.getElementById('btnAddPass');
const btnConAddPass = document.getElementById('confirmAddPass');
const btnCanAddPass = document.getElementById('cancelAddPass');

btnAddPass.addEventListener("click", function() {
    dl_add_pass.showModal();
});
btnConAddPass.addEventListener("click", function() {});
btnCanAddPass.addEventListener("click", function() {
    dl_add_pass.close();
});


const dl_update_pass = document.getElementById('dialog_update_pass');
const btnUpdatePass = document.getElementById('btnUpdatePass');
const btnConUpdatePass = document.getElementById('confirmUpdatePass');
const btnCanUpdatePass = document.getElementById('cancelUpdatePass');

btnUpdatePass.addEventListener("click", function() {
    dl_update_pass.showModal();
});
btnCanUpdatePass.addEventListener("click", function(e) {
    dl_update_pass.close();
});
btnConUpdatePass.addEventListener("click", function() {});


const dl_remove_pass = document.getElementById('dialog_remove_pass');
const btnRemovePass = document.getElementById('btnRemovePass');
const btnConRemovePass = document.getElementById('confirmRemovePass');
const btnCanRemovePass = document.getElementById("cancelRemovePass");

btnRemovePass.addEventListener("click", function() {
    dl_remove_pass.showModal();
});
btnCanRemovePass.addEventListener("click", function(e) {
    dl_remove_pass.close();
});
btnConRemovePass.addEventListener("click", function() {});