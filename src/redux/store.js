// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//    _state: {
//       profilePage: {
//          postData: [
//             { id: 1, message: 'Hi, how are you?', likeCount: 15 },
//             { id: 1, message: 'I\'ts my first post', likeCount: 20 },
//             { id: 1, message: 'Yo', likeCount: 20 },
//             { id: 1, message: 'Good', likeCount: 20 }
//          ],
//          newPostText: ''
//       },

//       dialogsPage: {
//          dialogsData: [
//             { id: 1, name: 'Dimych' },
//             { id: 2, name: 'Andrey' },
//             { id: 3, name: 'Sveta' },
//             { id: 4, name: 'Sasha' },
//             { id: 5, name: 'Viktor' },
//             { id: 6, name: 'Valera' }
//          ],

//          messageData: [
//             { id: 1, message: 'Hi' },
//             { id: 2, message: 'How is your it' },
//             { id: 3, message: 'Yo' },
//             { id: 4, message: 'Yo' },
//             { id: 5, message: 'Yo' }
//          ],
//          newMessageBody: ''
//       },

//       sidebar: {

//       }
//    },
//    _callSubscriber() {
//       console.log('render');
//    },

//    getState() {
//       return this._state;
//    },
//    subscribe(observer) {
//       this._callSubscriber = observer;
//    },

//    dispatch(action) {
//       this._state.profilePage = profileReducer(this._state.profilePage, action);
//       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//       this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//       this._callSubscriber(this._state);
//    }
// }

// export default store;
