import Axios from "axios";
import ENV from "@/configs/env";

import errorResponse from './Interceptors/ErrorResponse';
import successResponse from './Interceptors/SuccessResponse';
import SuccessRequest from "./Interceptors/SuccessRequest";
import ErrorRequest from "./Interceptors/ErrorRequest";

let instance = Axios.create({
    baseURL: ENV.url,
    headers: {
        'X-CSRF-TOKEN' : window.csrf_token
    }
});

instance.interceptors.response.use(successResponse, errorResponse);
instance.interceptors.request.use(SuccessRequest, ErrorRequest);

export default instance;
