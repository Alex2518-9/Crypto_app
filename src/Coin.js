import React from 'react'

const Coin = ( {name, icon, symbol, price} ) => {
  return (
    <div className='coinData'>
        <h1>Name: {name}</h1>
        <img src={icon}></img>
        <h3>Symbol: {symbol}</h3>
        <h4>Price: {price} USD</h4>
    </div>
  )
}

export default Coin