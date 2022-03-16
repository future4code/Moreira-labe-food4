const token = localStorage.getItem('token');
const newToken = localStorage.getItem('newToken')

const header = {
    headers: {
        auth: token
    }
}
export default header;

export const mainHeader = {
    headers: {
        auth: newToken
    }
}
