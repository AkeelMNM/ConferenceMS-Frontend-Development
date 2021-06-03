
const WORK_SHOP_API_BASE_URL = "http://localhost:3000/workShop";

class WorkShopServices{

    async submitWorkShop(workShop){
        return await fetch(WORK_SHOP_API_BASE_URL,{
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

    async getWorkShop(id){
        return await fetch(WORK_SHOP_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async getWorkShopByID(id){
        return await fetch(WORK_SHOP_API_BASE_URL+"/work/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


    async updateWorkShop(id,workShop){
        return await fetch(WORK_SHOP_API_BASE_URL+"/"+id,{
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

    async removeWorkShop(id){
        return await fetch(WORK_SHOP_API_BASE_URL+"/"+id,{
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }
}

export default new WorkShopServices();