import axios from "axios";
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
const CONFERENCE_API_BASE_URI = "http://localhost:3000/Conference";

class ConferenceService{



   async getConference(){
        return await fetch(CONFERENCE_API_BASE_URI+"",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async createconference(conference){
        return await fetch(CONFERENCE_API_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(conference)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }




   async getConferenceByUser(id){
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

   async getconferenceById(id){
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


  async updateconference(id,Conference){
       console.log(Conference);
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(Conference)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    async deleteconference(id){
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }

    async ConferenceApproval(id,approval){
        return await fetch(CONFERENCE_API_BASE_URI+'/approve/'+id,{
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
    ///////////////////////////////////////////
   /*getConference(){

        return axios.get(CONFERENCE_API_BASE_URI);
    }
    createconference(conference){

        return axios.post(CONFERENCE_API_BASE_URI,conference);
    }

    getconferenceById(conferenceId){
        return axios.get(CONFERENCE_API_BASE_URI + '/' + conferenceId);
    }

    updateconference(conference, conferenceId){
        return axios.put(CONFERENCE_API_BASE_URI + '/' + conferenceId, conference);
    }

    deleteconference(conferenceId){
        return axios.delete(CONFERENCE_API_BASE_URI + '/' + conferenceId);
    }

    //
    /**
     *  This service function is to approval of Conference proposal submission
     */
    /*async ConferenceApproval(id,approval){
        return await fetch(CONFERENCE_API_BASE_URI+'/approve/'+id,{
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
    //
    updateconferenceApproval(conference, conferenceId){
        return axios.put(CONFERENCE_API_BASE_URI + '/approve/' + conferenceId, conference);
    }*/







}

export default new ConferenceService();
