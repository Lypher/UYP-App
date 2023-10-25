export const GET_USER = "GET_USER"
export const GET_COUNT = "GET_COUNT"


export const getUser = () =>{
    return({
        type:GET_USER,
        payload:[],
    })
}

export const getCount = (cuenta)=>{
    return({
        type:GET_COUNT,
        payload:cuenta,
    })
}