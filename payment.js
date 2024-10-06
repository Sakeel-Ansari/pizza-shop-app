 
 

var options = {
 
"key": "rzp_test_9T014DgPoIsohI", //Enter the Key ID

"amount": "50000",  //Amount is in currency

"currency":"INR",

"name": "Pizza Shop", // your business name

"description": "Pizza Shop Transaction", 

"image": "https://example.com/your_logo", 

"handler": function (response) {
    alert("Payment Done...");

    alert(response.razorpay_payment_id);

    alert(response.razorpay_order_id);

    alert(response.razorpay_signature)

},
"prefill": {  //We recommend using the prefil

"name": "Customer Name",  // your customer'

"email": "customerEmail@example.com",

"contact": "customerPhoneNumber"
},

"notes":{
"address": "Razorpay Corporate Office"
},
"theme":{
"color":"#3399cc"
}
};
 var rzp1=new Razorpay(options);
rzp1.on('payment.failed',function(response){
    alert("Payment failed");
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});

document.getElementById('rzp-button1').addEventListener('click',function(e){ 

rzp1.open();

e.preventDefault();

});

 