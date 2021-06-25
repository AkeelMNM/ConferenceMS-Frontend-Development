const RESEARCH_PAPER_API_BASE_URI = "http://localhost:3000/researchPaper";


class ResearchPaperServices{

    /**
     *  This service function is to store Research paper submission in backend
     */
    async submitResearchPaper(researchPaper){
        return await fetch(RESEARCH_PAPER_API_BASE_URI,{
            method:'POST',
            headers:{
              'content-Type':"application/json"
            },
            body:JSON.stringify(researchPaper)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All Research paper submission from backend
     */
    async getResearchPaper(){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get the Research paper submission of specific user from backend
     */
    async getResearchPaperByUser(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get Research paper submission by the id from backend
     */
    async getResearchPaperByID(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/paper/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to update stored Research paper submission in backend
     */
    async updateResearchPaper(id,researchPaper){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(researchPaper)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove stored Research paper submission in backend
     */
    async removeResearchPaper(id){
        console.log(id);
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/"+id,{
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is for approval of Research paper submission
     */
    async researchPaperApproval(id,approval){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+'/approval/'+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(approval)
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is for make payment of Research paper submission
     */
    async researchPaperPayment(id,researchPayment){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+'/payment/'+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(researchPayment)
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

}

export default new ResearchPaperServices();