// //api call using redux using "Redux thunk"


// import { createSlice } from "@reduxjs/toolkit";


// const initialState = { //here the initial state is not empty. we are making an API call, So api calls basically always not written data it also written errors or other status so to handle all the expect of api lets make it an object and the result in data that is empty as of now.
//     data:[],
// };

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: { 
//         fetchProducts(state, action){
//             state.data = action.payload;
//         }
//     }
// });


// export const {fetchProducts} = productSlice.actions;
// export default productSlice.reducer;

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = data.json();
//         dispatch(fetchProducts(result))// its dispatching a action
//     }
// }


