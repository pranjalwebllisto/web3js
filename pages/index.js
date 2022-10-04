import React, { useEffect, useState } from "react";
import Web3 from "web3";


export default function Home() {
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState('')
  const [chainId, setChainId] = useState('')

  const getWeb3 = async () => {
    if (typeof window.ethereum !== undefined) {
      const web3 = new Web3(window.ethereum);
      console.log(web3)
      return await web3.eth.getAccounts()
    }
  };

  async function displayAccounts() {
    // const accounts = await getWeb3().eth.getAccounts()
    console.log(await getWeb3())

    // const bal = await getWeb3().eth?.getBalance(accounts[0]);
    // setBalance(getWeb3().utils.fromWei(bal, 'ether'))
    // const chainId = await getWeb3().eth.getChainId();
    // setChainId(chainId)
  }

  // useEffect(() => {
  //   // displayAccounts()
  // }, [account, chainId])

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (acc) => {
        setAccount(acc[0])
      })

      window.ethereum.on('chainChanged', (chainId) => {
        console.log(chainId);
        setChainId(chainId)
      })
    }
  }, [])

  return (
    <>

      <div>

        <p>Account: {account}</p>
        <p>Balance: {balance}</p>
        <p>ChainId: {chainId}</p>

        <button onClick={() => displayAccounts()}>Connect</button>
      </div>

    </>
  )
}
