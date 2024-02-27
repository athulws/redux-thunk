import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { // ivide add to cart and delete the cart enna options aan create cheyyandath, because athaan ippo ithil vendath product nte case il.
        add(state, action) { // "action" => varunna data read cheyyan and "state" =>  action vazhi read cheytha data ne update cheyyan
            state.push(action.payload)//when ever i pass data from UI it will read by action.payload, ee payload tharum eth data aan update cheyyendath enn
            // select cheyyunnath ellam add aakan aan eee method
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload) // here i am return a state that will not hold that deleted item,here i use filter the item based on the ID
            // here whatever ID i have if it is not equal to what i will pass from my UI then return that array only
        }
    }
});


export const { add, remove } = cartSlice.actions;// "add" enna function yum export cheyyanam so that we can call it for component, ingane aan ella actions creators um export cheyyunnath.
export default cartSlice.reducer; // reducer ne export cheythu, that will give me state

//Imporant Notes

//This is how we are going to create a slice
//when we have to the same thing in "Redux" there we have to create so many files and folders
// Because there we have to create actions, reducers, types in a seperate logic. Thats the reason lot of boilerplate code was there

//But in "Redux Toolkit" we just need all in one and that is with the help of slice
//So slice is collection of Redux reducer logic and actions for a single feature.
//So when i want to create a slice with the help of createSlice method i just need to mentions "name", "initial state", and "reducer" and my "actions"
//So in the Redux toolkit createSlice will auto generate the action type and action creator for you based on the name of the reducer function that i provide

//"immer JS" => Immer simplifies handling immutable data structures, it helps to write state in immutable manner


// "NEXT STEP IS TO CREATE STORE"
