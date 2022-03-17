const token = localStorage.getItem('token');
const addressToken = localStorage.getItem('addressToken')

export const header = {
    headers: {
        auth: token
    }
}

export const mainHeader = {
    headers: {
        auth: addressToken
    }
}
