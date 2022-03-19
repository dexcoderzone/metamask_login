import React from 'react'
import { useMoralis, useWeb3Transfer } from 'react-moralis'
import Login from '../components/Login'
import Moralis from 'moralis';

function entryPage() {
    const { isAuthenticated, logout } = useMoralis()
    
    const {fetch, isFetching} = useWeb3Transfer({
    amount: Moralis.Units.Token(20, 18),
    receiver: "0xc0AD4Af5Baeb264F72C6a7aF25141FFE8babdE38",
    type: "erc20",
    contractAddress: "0x1bb32463DDE5Df335C8468D58Fefa559a24f8eF6",
    })
    
  return (
    <div>
        {isAuthenticated ? (
            <div> 
            <h1>Successfully Logged in</h1>

            <button onClick={async () => {
              await Moralis.enableWeb3()
              fetch({
                onSuccess: () => {
                  console.log("success")
                },
                onError: () => {
                  console.log("error")
                }
              })
            }}>
              Transfer
            </button>
            <button onClick={logout}>Logout</button>
            </div>
        ) : (
                <Login />
                )
        }
        
    </div>
  )
}

export default entryPage