import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  return (
      <div className="mt-10 mb-10 w-[1200px] m-auto  grid grid-cols-3 gap-4">
    <Card 
    flower={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pOEVkDrpJCWxE-XitT-QTb1_J_hotsgo3uLo0Q4W6g&s=10",
      tittle: "sunflower",
      desc:"A beautiful yellow flower",
    }}
    />

        <Card 
    flower={{
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VQCOVcS3bK9pR51ddboWFpJm5SBpRHYaDeVfs9jAsw&s=10",
      tittle: "Zinnia",
      desc:"A beautiful blue flower",
    }}
    />

        <Card 
    flower={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNqAAnhan0FZe7_oLzY-utwyluqacpYa7-91UG_aUGA&s=10",
      tittle: "rose",
      desc:"A beautiful red flower",
    }}
    />

        <Card 
    flower={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcxyrQlEYy79p2M8KZD8fu6vwV2y7A5qzjebF6fy0uud_PGgItKD28Rg&s=10",
      tittle: "lily",
      desc:"A beautiful pink flower",
    }}
    />

        <Card 
    flower={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXQv6m3WD8PSMKE6nL4TPduhlrtDO6L_LFc8upj6HVA&s=10",
      tittle: "champak",
      desc:"A beautiful white flower",
    }}
    />

         <Card 
    flower={{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhbnAX3oQCo2c8cQiqDVl-cIdrXkAh21nPFB95FEmiHmntTyZ3FU4wUwmQa9HBeof8_yNeFxoXrgRpbzOCQ0cPrerKmkAFXvA4-7qldQ&s=10",
      tittle: "jasmine",
      desc:"A beautiful white flower",
    }}
    />



    
    </div>

  )
}

export default App
