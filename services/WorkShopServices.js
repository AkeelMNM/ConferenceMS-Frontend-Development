
const WORK_SHOP_API_BASE_URI = "http://localhost:3000/workShop";

class WorkShopServices{

    /**
     *  This service function is to store Workshop proposal submission in backend
     */
    async submitWorkShop(workShop){
        return await fetch(WORK_SHOP_API_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(workShop)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get all Workshop proposal submission from backend
     */
    async getWorkShop(){
        return await fetch(WORK_SHOP_API_BASE_URI+"/",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get Workshop proposal submission of specific user form backend
     */
    async getWorkShopByUser(id){
        return await fetch(WORK_SHOP_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get Workshop proposal submission by id from backend
     */
    async getWorkShopByID(id){
        return await fetch(WORK_SHOP_API_BASE_URI+"/work/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


    /**
     *  This service function is to update stored Workshop proposal submission in backend
     */
    async updateWorkShop(id,workShop){
        return await fetch(WORK_SHOP_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(workShop)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to remove stored Workshop proposal submission in backend
     */
    async removeWorkShop(id){
        return await fetch(WORK_SHOP_API_BASE_URI+"/"+id,{
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to approval of Workshop proposal submission
     */
    async workShopApproval(id){
        return await fetch(WORK_SHOP_API_BASE_URI+'/approval/'+id,{
            method:'POST',
            headers:{
                'content-Type':"application/json"
            }
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }
}

export default new WorkShopServices();