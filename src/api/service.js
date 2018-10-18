import requset from '../utils/axios/request'

let login = function(params) {
    return requset({
        methos: "GET",
        url: '/login',
        params
    })
}

export {
    login
}