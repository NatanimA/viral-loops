const HOST  = process.env.REACT_APP_HOST || 'http://localhost:8000';
const CLIENT_HOST = process.env.REACT_APP_CLIENT_HOST || 'http://localhost:3000';
const LAYOUT_API = '/api/form'
export const API = {
    HOST,
    LAYOUT_API: HOST + LAYOUT_API,
    CLIENT_HOST
}