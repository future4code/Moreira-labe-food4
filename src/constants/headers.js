const token = localStorage.getItem('token');

const header = {
    auth: token
}
export default header;