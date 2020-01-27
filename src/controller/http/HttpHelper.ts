import axios from 'axios';

const client = process.env.SERVER || 'http://localhost:8888/campsite';
const apiClient = axios.create({
    baseURL: client,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

const GET = async (path:String,parameters:any) => {
    // @ts-ignore
    return await apiClient.get(path, {params: parameters});
};

const POST = async (path:String,parameters:any,body:any) =>{
  try{
   // @ts-ignore
   return await apiClient.post(path,body);
  }catch (error) {
   return error.response;
  }
};

const DELETE = async (path:String,parameters:any) =>{
  try{
    // @ts-ignore
    return await apiClient.delete(path,{params:parameters});
  }catch(error){
    return error.response;
  }
};

const PUT = async (path:String,body:any) =>{
  try{
    // @ts-ignore
    return await apiClient.put(path,body);
  }catch(error){
    return error.response;
  }
};

export {
  GET,
  POST,
  PUT,
  DELETE
}