const USER_API_BASE_URI = "http://localhost:3000/user";

class UserServices {

    async createAccount(Account){
        return await fetch(USER_API_BASE_URI+"/register",{
            method:'POST',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(Account)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }


}

export default new UserServices();