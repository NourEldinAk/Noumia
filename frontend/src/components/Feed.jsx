import React , { useState,useEffect }from 'react'
import {useParams} from 'react-router-dom'

import {client} from '../client'
import MasonaryLayout from './MasonaryLayout'
import Spinner from './Spinner'
import { feedQuery, searchQuery } from '../utils/data'


const Feed = () => {
  const [loading, setLoading] = useState(true)
  const [pins, setPins] = useState(null)
  const {categoryId} = useParams()
  
  useEffect(() => {
    setLoading(true)
    
    if(categoryId){
      const query = searchQuery(categoryId)
      client.fetch(query)
      .then((data)=>{
        setPins(data)
        setLoading(false)
      })
    }else{
      client.fetch(feedQuery).then(data=>{
        setPins(data)
        setLoading(false)
      })
    }
    console.log(pins)
  }, [categoryId])
  
  
  if (loading) return <Spinner message="We Are Adding New Ideas To Your Feed!"/>
  if(pins.length === 0 ) return <h2 className='flex justify-center items-center font-bold mt-5'>No pins available yet!</h2>
  return (
    <div>
      {pins && <MasonaryLayout pins ={pins}/> }
    </div>
  )
}

export default Feed