import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  curSiteLocation: ["Главная", "Личный кабинет"],
  isLoggedIn: true,
  activeUser: {
    subscription: false,
    agreement: true,
    lastName: "Ерёменко",
    firstName: "Александр",
    patronymic: "Юрьевич",
    tel: "+77055720424",
    login: "sasha.eryomenko77@gmail.com",
    password: "121212",
    date: "0123-03-12",
    card: "",
    location: "Санкт-Петербург",
    policies: [],
    messages: []
  },
  users: [
    {
        subscription: false,
        agreement: true,
        lastName: "Ерёменко",
        firstName: "Александр",
        patronymic: "Юрьевич",
        tel: "+77055720424",
        login: "sasha.eryomenko77@gmail.com",
        password: "121212",
        date: "0123-03-12",
        card: "",
        location: "Город",
        policies: [],
        messages: []
    },
  ],
};

let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      let newUser = {
        ...action.payload,
        location: "Город",
        programs: [],
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
    setCurSiteLocation: (state, action) => {
      if (action.payload !== "") {
        state.curSiteLocation[2] = action.payload;
      } else state.curSiteLocation.splice(2, 1);
    },
    setLocation: (state, action) => {
      state.activeUser.location = action.payload;
    },
    setPolicy: (state, action) => {
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
    }
  },
});

export const {
  setUser,
  setActiveUser,
  checkLoggedIn,
  logoutUser,
  setCurSiteLocation,
  setLocation,
  setPolicy,
  changeUserPassword,
  changeUserFullName,
  changeTel,
  setMessage,
  removeMessage,
  removeAllMessages,
} = userSlice.actions;
export default userSlice.reducer;