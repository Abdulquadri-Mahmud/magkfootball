import React from 'react'
import { useParams } from 'react-router-dom'

export default function Readmore() {
    const { id } = useParams();
    
  return (
    <div>Readmore</div>
  )
}
