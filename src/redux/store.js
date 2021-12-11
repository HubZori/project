import profileuseReducer from "./profile-reducer"
import dialoguseReducer from "./dialog-reducer"


let store = {
  _state: {

    profilePage: {

      posts: [
        { id: 1, message: 'hay man', likeCount: 13 },
        { id: 2, message: 'hay man', likeCount: 10 },
        { id: 3, message: 'blablabla', likeCount: 100 },

      ],
      newPostText: 'it-camasutra.am'

    },

    dialogsPage: {

      messages: [
        { id: 1, message: 'helo nigga' },
        { id: 2, message: 'hay man' },
        { id: 3, message: 'blablabla' },
      ],

      dialogs: [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Tolik' },
        { id: 4, name: 'Andrey' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
      ],
      newTextMessage: 'it-camasutra.ru',
    },

    sidebar: {
      myFriends: [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Tolik' },
        { id: 4, name: 'Andrey' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {

     this._state.profilePage = profileuseReducer(this._state.profilePage, action);
     this._state.dialogsPage = dialoguseReducer(this._state.dialogsPage, action);
     this._callSubscriber(this._state);
  
  }

}

window.store = store;


export default store; 