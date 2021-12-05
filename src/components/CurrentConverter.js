import ExchangeRate from "./ExchangeRate";
import { useState } from 'react'
import axios from "axios";

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA' ]
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)

    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {

                interval: '5min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'MSFT',
                datatype: 'json',
                output_size: 'compact'
            },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    console.log(amount)

    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>
            <div className="input-box">
                <table>
                    <body>
                    <tr>
                        <td>Primary Currency</td>
                        <td>
                            <input
                                type="number"
                                name="currency-amount-1"
                                value={""}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                        </td>
                        <td>
                            <select
                                value={chosenPrimaryCurrency    }
                                name="currency-option-1"
                                className="currency-options"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) =>  (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondary Currency</td>
                        <td>
                            <input
                                type="number"
                                name="currency-amount-2"
                                value={""}
                            />

                        </td>
                        <td>
                            <select
                                value={chosenSecondaryCurrency}
                                name="currency-option-2"
                                className="currency-options"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) =>  (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    </body>
                </table>
                <button ide="convert-button" onclick={convert}>Convert</button>
            </div>


            <ExchangeRate/>
        </div>
    );
}

export default CurrencyConverter