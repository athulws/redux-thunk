 //   api call using redux using "Redux thunk"
//-----------------------------------------------


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from '../utils/StatusCode';

const initialState = { //here the initial state is not empty. we are making an API call, So api calls basically always not written data it also written errors or other status so to handle all the expect of api lets make it an object and the result in data that is empty as of now.
    data:[],            // API call cheyyumbol oru object create cheyyanam, athil aan initialSate cheyyendath
    status: StatusCode.IDLE
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: { // To do api call we will not write the logic here, athaan ithinte thazhe ittath => "export default productSlice.reducer;"
                // slice dont't know how to handle asynchronous operation so we have to create a thunk action creator here
        // fetchProducts(state, action){ 
        //     state.data = action.payload; // ivide data update aan nadakkunnath that i get from API
        // }
    },
    extraReducers: (builder) => { //extraReducers is a powerful feature of Redux Toolkit that allows you to handle a wide range of actions in your slices

        builder//When you define reducers within extraReducers, you use the builder object and its methods to specify how the state should be updated in response to different action types.// The builder object provides methods like addCase, addMatcher, addDefaultCase, etc.// Now in the extra reducer we have to read the data We have to do our state update logic, so we have create "builder" and addCase(). 
        .addCase(getProducts.pending, (state, action)=>{
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action) =>{ // once my promise is resolved i want to update the state //"fulfilled" ne pakaram eth state venamenkilum kodukkam like pending etc...athine "getProduct" koduth oru dot koduthal suggetions varum
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.status = StatusCode.ERROR
        })
    }
});


export const {fetchProducts} = productSlice.actions; // nammal use cheytha "fetchProducts" ne ivide export cheythu //fetchProducts may not be directly used within the Product component, it serves an important role in managing the asynchronous data fetching process within the Redux store.
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => { // "products/get" ith action type aan
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result; //we don't have dispatch anything because nothing in reducers.So just i have to "return" the data
})


//thunk action creator

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();

//         dispatch(fetchProducts(result))// its dispatching a action for this function "fetchProduct"  
//                                        //"fetchProduct" nte ullil reducers il ulla "result" pass cheyth aan dispatch cheyyunnath
//     }
// }


// AFTER SLICE CREATION NEXT STEP IS TO CREATE "STORE"



//To handle the different state redux toolkit:

//To handle same kind of structure of promises or to handle the different state redux toolkit offers a better way of handling asynchronous operation with the help of create async thunk. so let's improvise this code with the help of create async thunk.
// ith cheyyan slice ne modify cheythal mathi
//Now in the extra reducers we have to add the cases like "promises", promises have 3 cases athokk extra reducers handle cheyym
// "createAsyncThunk" ith import cheyyanam





//THIS IS HOW ASYCHRONOUS OPERATION IN REDUX TOOLKIT WITH THE HELP OF CREATE ASYNC THUNK





//Important NOTE:-

//In your specific case, you have an empty reducers field because you don't have any synchronous actions to handle within the productSlice. 
//Instead, you're using extraReducers to handle the asynchronous action (getProducts) generated by createAsyncThunk.