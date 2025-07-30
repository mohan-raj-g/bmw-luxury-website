import { useState } from 'react'

export default function CurrencySwitcher({ inr, usd, euro }) {
  const [currency, setCurrency] = useState('INR')
  let price
  switch (currency) {
    case 'INR': price = `₹${inr.toLocaleString()}`; break
    case 'USD': price = `$${usd.toLocaleString()}`; break
    case 'EURO': price = `€${euro.toLocaleString()}`; break
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-2">
        <button className={`px-3 py-1 rounded ${currency==='INR'?'bg-blue-800 text-white':'bg-gray-700 text-gray-300'}`} onClick={()=>setCurrency('INR')}>INR</button>
        <button className={`px-3 py-1 rounded ${currency==='USD'?'bg-blue-800 text-white':'bg-gray-700 text-gray-300'}`} onClick={()=>setCurrency('USD')}>USD</button>
        <button className={`px-3 py-1 rounded ${currency==='EURO'?'bg-blue-800 text-white':'bg-gray-700 text-gray-300'}`} onClick={()=>setCurrency('EURO')}>EURO</button>
      </div>
      <div className="text-3xl font-bold text-white">{price}</div>
    </div>
  )
}