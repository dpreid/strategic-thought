

function AddClick() {
    console.log('val = ' + document.getElementById('click_field').value);
    var current_val = document.getElementById('click_field').value;
    document.getElementById('click_field').value = Number(current_val) + 1;

}
