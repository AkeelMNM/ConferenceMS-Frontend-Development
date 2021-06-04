
const WORK_SHOP_API_BASE_URI = "http://localhost:3000/workShop";

class WorkShopServices{

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

    async getWorkShop(){
        return await fetch(WORK_SHOP_API_BASE_URI+"/",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async getWorkShopByUser(id){
        return await fetch(WORK_SHOP_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async getWorkShopByID(id){
        return await fetch(WORK_SHOP_API_BASE_URI+"/work/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


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

    async removeWorkShop(id){
        return await fetch(WORK_SHOP_API_BASE_URI+"/"+id,{
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }
}

export default new WorkShopServices();