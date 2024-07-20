import React from 'react'
import { useParams } from 'react-router-dom'
import Items from '../../data/Items'

function Items_details() {
  let {item_id} = useParams()
  let find_item = Items.find((fi)=>item_id == fi.id )
  console.log(find_item)

  return (
    <>
    <div className='container'>
<h1>Item details : {item_id} </h1>
<div className='row'>
  <div className='col-4'>
    <img src={find_item.image}></img>
  </div>
  <div className='col-4'>
    <h4>Title: {find_item.item_name}</h4>
    <h4>Description:{find_item.description} </h4>
    <h4>Category:{find_item.Categories} </h4>
    <h4>Price:{find_item.price}</h4>
  </div>

</div>
    </div>
    </>
  )
}

export default Items_details