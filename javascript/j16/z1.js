function addOrder(){
    let order = {
        client_name: "",
        client_phone: "",
        order_name: "",
        order_price: "",
        order_status: "",
    }
    order.client_name = document.getElementById(`client_name`).value;
    order.client_phone = document.getElementById(`client_phone`).value;
    order.order_name = document.getElementById(`order_name`).value;
    order.order_price = document.getElementById(`order_price`).value;
    order.order_status = document.getElementById(`order_status`).value;

    console.log(order); 
}