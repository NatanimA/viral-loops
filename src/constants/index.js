const HOST  = process.env.REACT_APP_HOST || 'http://localhost:8000';
const CLIENT_HOST = window.location.origin
const LAYOUT_API = '/api/form'
export const API = {
    HOST,
    LAYOUT_API: HOST + LAYOUT_API,
    CLIENT_HOST
}