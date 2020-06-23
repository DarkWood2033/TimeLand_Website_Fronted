export default (request) => {
    let token = localStorage.getItem('token');

    if(token){
        request.headers.Authorization = 'Bearer ' + token;
    }else{
        request.headers.Authorization = null;
    }

    return Promise.resolve(request);
};
