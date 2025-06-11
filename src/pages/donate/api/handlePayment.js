const openRazorpay = (orderData) => {
    return new Promise((resolve, reject) => {
        let options = {
            "key": "rzp_test_MZYznyC8rWD7O9", // Enter the Key ID generated from the Dashboard
            "amount": orderData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Durga Foundation", //your business name
            "description": "Test Transaction",
            "order_id": orderData.order_id,//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response) {
                try {
                    const paymentData = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    };
                    let paymentVerifyResponse = await fetch('http://localhost:3000/api/verify', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', },
                        body: JSON.stringify({
                            paymentData: paymentData,
                            dbData:orderData
                        })
                    })
                    if (!paymentVerifyResponse.ok) {
                        throw new Error("there was an error in this:", paymentVerifyResponse.status);
                    }
                    let paymentResponseData = await paymentVerifyResponse.json();
                    console.log(paymentResponseData);
                    resolve({
                        sucess: true,
                        paymentResponseData: paymentResponseData
                    })
                } catch (error) {
                    reject({
                        status: false,
                        error: error
                    })
                }
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": orderData.name, //your customer's name
                "email": orderData.email,
                "contact": orderData.phone //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"

            }
        }
        let rzp1 = new window.Razorpay(options);
        rzp1.open();
        // verification code
    })
}
const handlePayment = async (requestData) => {
    console.log(requestData.amount, '008')
    let paymentStatus = null;
    try {
        let response = await fetch(`http://localhost:3000/api/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                amount: requestData.amount
            }),
        })
        const responseData = await response.json()
        let orderData = {
            amount: responseData.amount,
            order_id: responseData.id,
            frequency: requestData.frequency,
            userData: {
                name: requestData.name,
                email: requestData.email,
                phone: requestData.phone,
            }
        }
        await openRazorpay(orderData).then((res) => {
            paymentStatus = true
        }).catch((err) => {
            console.error("Payment failed:", err);
            paymentStatus = false
        });
        return paymentStatus
    } catch (error) {
        paymentStatus = false
        console.error('Error sending request:', error);
        throw error;
    }
};

export default handlePayment;