
const RESEARCH_PAPER_API_BASE_URL = "http://localhost:3000/researchPaper";

class ResearchPaperServices{

    async submitResearchPaper(researchPaper){
        return await fetch(RESEARCH_PAPER_API_BASE_URL,{
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

    async getResearchPaper(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async getResearchPaperByID(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URL+"/paper/"+id,{
            method:'GET',
        }).then(response =>{
            console.log(response.json())
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


    async updateResearchPaper(id,researchPaper){
        return await fetch(RESEARCH_PAPER_API_BASE_URL+"/"+id,{
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

    async removeResearchPaper(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URL+"/"+id,{
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }
}

export default new ResearchPaperServices();