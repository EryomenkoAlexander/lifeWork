import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoggedIn: false,
  activeUser: {},
  users: [],
};

let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      let newUser = {
        ...action.payload,
        location: "Город",
        bank: 0,
        policies: [],
        messages: [],
      };
      state.users.push(newUser);
    },
    setActiveUser: (state, action) => {
      let users = state.users;

      for (let i = 0; i < users.length; i++) {
        if (users[i].login === action.payload) {
          state.activeUser = users[i];
          break;
        }
      }
      state.isLoggedIn = true;
    },
    logoutUser: (state, action) => {
      let users = state.users;

      for (let i = 0; i < users.length; i++) {
        if (users[i].login === action.payload) {
          users[i] = state.activeUser;
          break;
        }
      }
      state.isLoggedIn = false;
      state.activeUser = {};
    },
    setLocation: (state, action) => {
      state.activeUser.location = action.payload;
    },
    setPolicy: (state, action) => {
      state.activeUser.bank -= action.payload.price;
      let d = new Date()
      state.activeUser.policies.push({
        ...action.payload,
        dateEnd: {
          day: d.getDate(),
          month: d.getMonth() + 1,
          year: d.getFullYear() + 5,
        },
      });
    },
    changeUserPassword: (state, action) => {
      state.activeUser.password = action.payload;
    },
    changeUserFullName: (state, action) => {
      let newFullName = action.payload;
      let user = state.activeUser;
      user.firstName = newFullName.firstName;
      user.lastName = newFullName.lastName;
      user.patronymic = newFullName.patronymic;
    },
    changeTel: (state, action) => {
      state.activeUser.tel = action.payload;
    },
    setMessage: (state, action) => {
      let d = new Date()
      let newMessage = {
        ...action.payload,
        id: Math.random(),
        time: [d.getHours(), d.getMinutes()].join(':'),
        date: [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('.')
      }
      state.activeUser.messages.push(newMessage)
    }, 
    removeMessage: (state, action) => {
      let message = action.payload;
      let messages = state.activeUser.messages

      state.activeUser.messages = messages.filter(m => m.id !== message.id)
    },
    removeAllMessages: (state, action) => {
      state.activeUser.messages = [];
    },
    addBank: (state, action) => {
      state.activeUser.bank += +action.payload;
    }
  },
});

export const {
  setUser,
  setActiveUser,
  checkLoggedIn,
  logoutUser,
  setLocation,
  setPolicy,
  changeUserPassword,
  changeUserFullName,
  changeTel,
  setMessage,
  removeMessage,
  removeAllMessages,
  addBank,
} = userSlice.actions;
export default userSlice.reducer;
