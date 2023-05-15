import React from 'react'
import Navbar from './compoents/Navbar'
import { Auth } from 'firebase/auth'
import {usaAuthState, useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Chat from './compoents/Chat'

const style = {
      appContainer:'max-w-[728px] mx-auto text-center',
      appSection: 'flex flex-col h-[90vh] bg-gray-100 mt-10  shadow-xl border relative'
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className={style.appContainer}>
      <section className={style.appSection}>
        <Navbar/>
        <Chat/>

      </section>
      
    </div>
  )
}

export default App
