/* eslint-disable no-unused-vars */
import Axios from "axios";
import publicKey from './../..//jwt/public'
import jwt from 'jsonwebtoken'

const state = {
    logged: false,
  
}

const getters = {
    logged: state => {
        return state.logged
    },
   
}

const actions = {
    login({commit}, loginData) {
        Axios.post('login', loginData)
        .then(result => {
          //  console.log(result.data)
            jwt.verify(result.data.access_token, publicKey, error => {
               if(!error) {
                   localStorage.setItem('token', result.data.access_token)
                   commit('LOGGED')
               }
            })
        })
    }
}

const mutations = {
    LOGGED(state) {
        state.logged = true
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}