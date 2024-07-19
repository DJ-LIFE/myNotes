import axios from "axios";
import { create } from "zustand";

const authStore = create((set) => ({
  // States
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },
  signUpForm: {
    email: "",
    password: "",
  },
  updateLoginForm: (e) => {
    const { name, value } = e.target;

    // const { loginForm } = authStore.getState();
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
    // set({
    //     loginForm: {
    //         ...loginForm,
    //         [name]: value,
    //     }
    // })
  },
  updateSignUpForm: (e) => {
    const { name, value } = e.target;

    // const { loginForm } = authStore.getState();
    set((state) => {
      return {
        signUpForm: {
          ...state.signUpForm,
          [name]: value,
        },
      };
    });
    // set({
    //     loginForm: {
    //         ...loginForm,
    //         [name]: value,
    //     }
    // })
  },

  login: async () => {
    const { loginForm } = authStore.getState();
    await axios.post("/login", loginForm, {
      withCredentials: true,
    });
    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  signup: async () => {
    const { signUpForm } = authStore.getState();
    await axios.post("/signup", signUpForm, {
      withCredentials: true,
    });
    set({
      signUpForm: {
        email: "",
        password: "",
      },
    });
  },
  logout: async() => {
    await axios.get("/logout");
    set ({loggedIn: false});
  }
}));

export default authStore;
