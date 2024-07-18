import axios from 'axios';
import { create } from 'zustand'

const authStore = create((set) => ({
  // States
  loggedIn: null,
    loginForm: {
        email: "",
        password: ""
    },
    updateLoginForm: (e) => {

        const { name, value } = e.target;

        // const { loginForm } = authStore.getState();
        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })
        // set({
        //     loginForm: {
        //         ...loginForm,
        //         [name]: value,
        //     }
        // })
    },

    login: async () => {
        const {loginForm} = authStore.getState();
        await axios.post('/login', loginForm, {
        withCredentials: true});
        set({loggedIn: true});
    },

    checkAuth: async () => {
        try {
            await axios.get('/check-auth')
        set({loggedIn: true});
        } catch (err) {
            set({loggedIn: false});
        }
        
    }

}))

export default authStore;