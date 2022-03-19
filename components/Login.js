import React from 'react'
import { useMoralis } from 'react-moralis'

function Login() {
    const { authenticate, authError } = useMoralis()
  return (
    <div>
        {
            authError && <p>{authError.code} -- {authError.name} -- {authError.message}</p>
        }
        <button onClick={authenticate}>Login</button>
    </div>
  )
}

export default Login