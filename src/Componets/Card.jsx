import React from 'react'

const Card = ({ animal}) => {
  return (
   <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <h2>Información del Animal</h2>
      <p>Nombre: {animal.name}</p>
      <p>Tipo: {animal.type}</p>
      <p>Genero: {animal.genero}</p>
   </div>
  )
}

export default Card
