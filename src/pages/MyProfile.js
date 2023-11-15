import React from 'react';
import Idea from './Idea';
import Item from './Item';
import {useState} from 'react';
import {nanoid} from 'nanoid'

const SingleItem = () => {
  const[items,setItems]=useState([])

  const addItem=(itemName)=>{
    const newItem={
      name:itemName,
      completed:false,
      id:nanoid()

    }
    const newItems=[...items,newItem]
    setItems(newItems)
  }
  return (
    <div>
      <Idea addItem={addItem}/>
      <Item items={items}/>
      
      
    </div>
  )
}

export default SingleItem
