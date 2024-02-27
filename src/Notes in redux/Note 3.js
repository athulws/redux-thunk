//React Redux Hook Explanation

// 1) React redux offers a set of Hook as an alternative to the existing "connect() higher order component."
// 2) These Hooks allow you to connect to the Redux store and dispatch actions without having to wrap your components in connect()




// React Redux have two hooks useSelector and useDispatch hooks,

// useSelector:- "Used to read or get the state" 
// useDispatch:- "Used to dispatch the actions"

//step 1 :- Dispatch the actions so that i can add the particular item to the cart










// useSelector:-

//1)useSelector is equivalent to "mapStateToProps()"
//2) Its takes in a function argument that returns the part of the state that you want


// useDispatch:- "Used to dispatch the actions"

//1) useDispatch is equivalent to "mapDispatchToProps()"
//2) This hook returns a reference to the dispatch function from the Redux store.You may use it to dispatch actions as needed. 