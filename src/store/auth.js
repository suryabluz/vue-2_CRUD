import axios from "axios"

export default{
    state: {
       
        token:null,
        user:null,
    },
    getters: {
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        }
    },
    actions: {
        async signIn({dispatch}, credentials){
            let response = await axios.post('auth/signIn',credentials)
            dispatch('attempt', response.data.token)
            
        },

        async attempt ({commit}, token){
            commit('SET_TOKEN',token)
        }
    },
 
  }
  