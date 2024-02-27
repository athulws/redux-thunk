import React from 'react'
import NavBar from './NavBarPanel'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'


// Provider and store ne import cheythu
// So this is the way through which you provide your redux state to your components
// Now my react componets know about the Redux state and that we can check with the help of Redux devtool extension

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>

        <NavBar />

        <main>
          <Outlet />
        </main>

      </Provider>
    </>
  )
}

export default RootLayout