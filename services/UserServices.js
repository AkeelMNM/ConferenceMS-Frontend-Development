const USER_API_BASE_URI = "http://localhost:3000/user";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class UserServices {


    async loginAccount(Account){
        console.log('this user service', USER_API_BASE_URI+"/login/"+Account.email+ "," +Account.password);
        console.log('user service ',await fetch(USER_API_BASE_URI+"/login/"+Account.email+ "," +Account.password, {method: 'GET',}));
        return await fetch(USER_API_BASE_URI+"/login/"+Account.email+ "," +Account.password, {
            method: 'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }


    /**
     * this service function is to store user details submission in backend
     */
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

    /**
     * this service function is to get the user details submission of specific user ID from backEnd
     */
    async getUserByID(userID){
        return await fetch(USER_API_BASE_URI+"/"+userID, {
            method: 'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }



}

export default new UserServices();