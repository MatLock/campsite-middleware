import axios from 'axios';
import {Response} from '../response/Response';

const client = process.env.SERVER || 'http://localhost:8888/campsite';
const apiClient = axios.create({
    baseURL: client,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function get(path:String){
    // @ts-ignore
   let response = await apiClient.get<T>(path,{});
   let reservationResponse: Response = response.data;
   return reservationResponse;
}

/*
const availability = async (newUser: NewUser) => {
    try {
        const response = await apiClient.post<User>('/users', newUser);
        const user = response.data;
        return user;
    } catch (err) {
        if (err && err.response) {
            const axiosError = err as AxiosError<ServerError>
            return axiosError.response.data;
        }

        throw err;
    }
};


export async function get<T>(
    path: string,
    args: RequestInit = { method: "get" }
): Promise<HttpResponse<T>> {
    return await http<T>(new Request(path, args));
};

 */