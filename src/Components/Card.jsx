import React from 'react'
import './Card.css'
function Card(props) {
 //let produto = props.produto
 const {nome, valor, quantidade} = props.produto
    return (
    <div className='container-card'>
       <p>

        {nome}

       </p>

          <p>

         preço:{valor} 
         </p>


         <p>

         Estoque:{quantidade}

         </p>

    </div>
  )
}

export default Card