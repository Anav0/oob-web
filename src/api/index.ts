import axios from "axios";
import { ConflictSearchPayload, Conflict, Place, PlaceSearchPayload } from "models/types";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

instance.interceptors.response.use((response) => {
    if (response.status === 204) {
        return Promise.resolve(null);
    }
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }

    console.error(response);
    return Promise.reject(response);

}, (e) => {
    console.error(e)
    return Promise.reject(e);
});


class ConflictApi {
    async search(payload: ConflictSearchPayload) {
        return instance.post<ConflictSearchPayload, Conflict[]>('/conflicts/search', payload);
    }
    async detail(id: number) {
        return instance.get<number, Conflict>(`/conflicts/detail?id=${id}`);
    }
}
class PlaceApi {
    async search(payload: PlaceSearchPayload) {
        return instance.post<PlaceSearchPayload, Place[]>('/places/search', payload);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    conflicts: new ConflictApi(),
    place: new PlaceApi(),
}

