import {useState} from 'react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card.jsx'
import './Produtos.css'
function Produtos() {
    const [produtos,setProdutos] = useState([
        {nome: 'Keyboard', valor: '6000', quantidade: 3},
        {nome: 'Mouse', valor: '3654', quantidade: 1},
        {nome: 'Monitor', valor: '2252', quantidade: 2},
        {nome: 'Headset', valor: '2262', quantidade: 5},
        {nome: 'Mousepad', valor: '2252', quantidade: 60},
        {nome: 'Pendrive', valor: '22432', quantidade: 40},
        {nome: 'External Hard Drive', valor: '22234', quantidade: 13},
        {nome: 'Keyboard', valor: '22', quantidade: 10},
        {nome: 'Keyboard', valor: '2322', quantidade: 3},
        {nome: 'Keyboard', valor: '23456', quantidade: 4}
      ])
  return (
    <div>

         <Navbar />

         Produtos

        <div className='cards'>
         {produtos.map((produto) => (
         <Card produto={produto}/>
      ))}
      </div>

    </div>
  )
}

export default Produtos