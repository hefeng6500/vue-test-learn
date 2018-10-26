import requset from '../utils/axios/request'

let login = function(params) {
    return requset({
        methos: "GET",
        url: '/login',
        params
    })
}

let uploadFile = (data)=> {
    return requset({
        methos: "POST",
        url: '/uploadFile',
        data
    })
}

export {
    login,
    uploadFile
}