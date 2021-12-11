const ADD_MESSAGE = "ADD_MESSAGE";


let initialState = {

    messages: [
        {id: 1, message: 'helo nigga'},
        {id: 2, message: 'hay man'},
        {id: 3, message: 'blablabla'},
    ],

    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Tolik'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
};


const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:

            let body = action.newTextMessage;
            return {
                ...state,
                newTextMessage: "",
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;

    }
}


export const addMessageCreator = (newTextMessage) => ({type: ADD_MESSAGE, newTextMessage})


export default dialogReducer;