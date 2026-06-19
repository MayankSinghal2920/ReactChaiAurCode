import React from 'react'

function Card({username, price}) {
  return (
 <div className="w-60 rounded-xl bg-black text-white overflow-hidden"> 
   <img
    src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
    alt="test"
    className="w-full h-48 object-cover"
  /> 

  <div className="p-4">
    <div className="flex justify-between">
      <h1 className="font-bold">{username}</h1>
      <h1>Price</h1>
    </div>

    <div className="flex justify-between">
      <p>{price}</p>
      <p>0.01 ETH</p>
    </div>
  </div> 
 </div> 
  )
}

export default Card