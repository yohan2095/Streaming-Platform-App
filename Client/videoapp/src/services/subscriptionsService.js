import axios from 'axios';

const getAllSubscriptions = async () =>
{
   return axios.get("http://localhost:8000/api/subscriptions")   
}

const getSubscription = async (id) =>
{
    return axios.get("http://localhost:8000/api/subscriptions/" + id)
}

export default {getAllSubscriptions, getSubscription}