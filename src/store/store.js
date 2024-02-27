import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";//here i need to mention the "slice" that created
import productSlice from "./productSlice";
const store = configureStore({
    reducer : { // This is a property of reducer
        cart: cartSlice,//i will create one property of cart that will hold my cartSlice, Redux DevTool il ee cart kanam


        // prodcuts: productSlice
    }
});

export default store;

//NEXT STEP IS CONFIGURING THE STORE TO YOUR ROOT COMPONENT (LIKE DISPATCHING REACTION)
//Redux and componets communicate cheyyan
// I need to provide our state that i created in the Redux to my component Pages or i want to update the state for my component to Redux with the help of some dispatching reaction
//All this possible once my componets know about my store 
 

//We have installed two packages Redux toolkit and react Redux and i mentioned that react Redux package is used for the react
//We need that binding so that we have one provider that provider component will come from my react Redux package
//So this provider is basically a higher order component that wrap up the react application and makes it aware to the entire Redux state and it provides the store to its all the child components
// So now we want our react entire app to access the store so just put that provider wherever you want to flow the states
//So now we want our entire react app to access the store so just put the provider in the root componets

// Ithil RootLayout.js enna file il aan eni cheyyendath 
//Avide "Provider" and "store" ne vilikkua , angane aan Redux state ne components il vilikkunnath