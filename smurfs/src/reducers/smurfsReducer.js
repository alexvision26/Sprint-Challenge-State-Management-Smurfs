

export const initialState = {
    name:"Brainey",
    age:200,
    height:"5cm",
    id:0
}


export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}