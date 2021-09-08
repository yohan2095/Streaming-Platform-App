import axios from 'axios';

const getAllMembers = async () =>
{
   return axios.get("http://localhost:8000/api/members")   
}

const getMember = async (id) =>
{
    return axios.get("http://localhost:8000/api/members/" + id)
}

export default {getAllMembers, getMember}