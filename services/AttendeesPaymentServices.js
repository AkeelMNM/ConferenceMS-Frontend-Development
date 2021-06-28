
const ATTENDEES_PAYMENT_API_BASE_URI = "http://localhost:3000/attendeesPayment";

class AttendeesPaymentServices {

    /**
     * this service function is to store Attendees payment  details submission in backend
     */
    async makePayment(payment){
        return await fetch(ATTENDEES_PAYMENT_API_BASE_URI+"/pay",{
            method:'POST',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(payment)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }


}

export default new AttendeesPaymentServices();