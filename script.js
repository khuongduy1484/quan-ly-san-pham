let arr = ['NOKIA','SAMSUNG','SONNY','HUAWEI','OPPO'];
document.getElementById('number2').innerHTML = arr.join(' ');
function thêm_sản_phảm_vào() {
    let a = document.getElementById('arr').value;
    arr.push(a);
    document.getElementById('number2').innerHTML = arr.join(' ' );
    alert("Sản phẩm mới được thêm vào cửa hàng " +a);
}
function xóa_phần_tử_trong_mảng() {
    let b =document.getElementById('number3').value;
    for (let i = 0;i<arr.length;i++){

        if (b === arr[i]){
            arr.splice(i,1)

        }
    }
    document.getElementById('number2').innerHTML = arr.join(' ');
}



