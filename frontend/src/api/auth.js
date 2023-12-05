import axios from './axios.js'

//borrese los comentadores en caso de no funcionar las peticiones al backend

export const registerRequest = user =>axios.post('/register', user)

export const loginRequest = user =>axios.post('/login', user)

export const verifyTokenRequest = () =>axios.get('/verify')

export const logoutRequest = () =>axios.post('/logout')