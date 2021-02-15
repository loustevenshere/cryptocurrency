import React from 'react'
import './Coin.css';

// Write this jsx first before passing down props of coinData
const Coin = ({image, name, symbol, volume, price, priceChange, marketcap}) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price: ${price.toLocaleString()}</p>
                    <p className="coin-volume">Volume: ${volume.toLocaleString()}</p>

                {/* Ternary giving priceChange data and determining if class is red or green */}
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : ( <p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}

                    <p className="coin-marketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>


                </div>
            </div>
            
        </div>
    )
}

export default Coin
