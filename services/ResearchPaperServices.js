
const RESEARCH_PAPER_API_BASE_URI = "http://localhost:3000/researchPaper";

class ResearchPaperServices{

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

    async getResearchPaper(){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async getResearchPaperByUser(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async getResearchPaperByID(id){
        return await fetch(RESEARCH_PAPER_API_BASE_URI+"/paper/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


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
}

export default new ResearchPaperServices();