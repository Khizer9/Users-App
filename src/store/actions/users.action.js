import axios from "axios"
export const GET_USERS_DATA = "GET_USERS_DATA"
export const GET_USERS_DATA_SUCCESS = "GET_USERS_DATA_SUCCESS"
export const getUsersData = () => async (dispatch) => {
    dispatch({
        type: GET_USERS_DATA
    })
    try {
        const response = await axios.get("https://randomuser.me/api/?results=10")
        dispatch(getUsersDataSuccess(response.data.results))
    }
    catch (error) {
        console.log(error)
    }
}
export const getUsersDataSuccess = (users) => {
    return {
        type: GET_USERS_DATA_SUCCESS,
        payload: users
    }
}