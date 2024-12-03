import React from 'react'
import { useParams } from 'react-router-dom'

export default function DeleteOrder() {
    const { id } = useParams();
    
  return (
    <div>DeleteOrder</div>
  )
}
