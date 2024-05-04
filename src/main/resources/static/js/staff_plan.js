//  nois chung phan nay thi sao chep het vao
const dl_add = document.getElementById('dialog_add');
const btnAdd = document.getElementById('btnAdd');
const btnConAdd = document.getElementById('confirmAdd');
const btnCanAdd = document.getElementById('cancelAdd');

btnAdd.addEventListener("click", function() {
    dl_add.showModal();
});
btnConAdd.addEventListener("click", function() {});
btnCanAdd.addEventListener("click", function() {
    dl_add.close();
});


dl_add.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        dl_add.close();
    }
});

const dl_update = document.getElementById('dialog_update');
const btnUpdate = document.getElementById('btnUpdate');
const btnConUpdate = document.getElementById('confirmUpdate');
const btnCanUpdate = document.getElementById('cancelUpdate');

btnUpdate.addEventListener("click", function() {
    dl_update.showModal();
});
btnCanUpdate.addEventListener("click", function(e) {
    dl_update.close();
});
btnConUpdate.addEventListener("click", function() {});


const dl_remove = document.getElementById('dialog_remove');
const btnRemove = document.getElementById('btnRemove');
const btnConRemove = document.getElementById('confirmRemove');
const btnCanRemove = document.getElementById('cancelRemove');

btnRemove.addEventListener("click", function() {
    dl_remove.showModal();
});
btnCanRemove.addEventListener("click", function(e) {
    dl_remove.close();
});
btnConRemove.addEventListener("click", function() {});





const dl_add_sta = document.getElementById('dialog_add_stations');
const btnAddSta = document.getElementById('btnAddStations');
const btnConAddSta = document.getElementById('confirmAddStations');
const btnCanAddSta = document.getElementById('cancelAddStations');

btnAddSta.addEventListener("click", function() {
    dl_add_sta.showModal();
});
btnConAddSta.addEventListener("click", function() {});
btnCanAddSta.addEventListener("click", function() {
    dl_add_sta.close();
});


const dl_update_sta = document.getElementById('dialog_update_stations');
const btnUpdateSta = document.getElementById('btnUpdateStations');
const btnConUpdateSta = document.getElementById('confirmUpdateStations');
const btnCanUpdateSta = document.getElementById('cancelUpdateStations');

btnUpdateSta.addEventListener("click", function() {
    dl_update_sta.showModal();
});
btnCanUpdateSta.addEventListener("click", function(e) {
    dl_update_sta.close();
});
btnConUpdateSta.addEventListener("click", function() {});


const dl_remove_sta = document.getElementById('dialog_remove_stations');
const btnRemoveSta = document.getElementById('btnRemoveStations');
const btnConRemoveSta = document.getElementById('confirmRemoveStations');
const btnCanRemoveSta = document.getElementById("cancelRemoveStations");
console.log(btnCanRemoveSta);
console.log(btnConRemove);
btnRemoveSta.addEventListener("click", function() {
    dl_remove_sta.showModal();
});
btnCanRemoveSta.addEventListener("click", function(e) {
    dl_remove_sta.close();
});
btnConRemoveSta.addEventListener("click", function() {});