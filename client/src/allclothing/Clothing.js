import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const Clothing = () => {
  const [clothing, setClothing] = useState(null)

  useEffect(()=>{
    const getClothing = async() => {
      try {
        const { data } = await axios('/api/products/')
        setClothing(data)
      } catch (error) {
        console.log(error)
      }
    }
    getClothing()
  },[])
  
  useEffect(()=>console.log(clothing),[clothing])
  return (
    <div className="container">
      {clothing && clothing.map((cloth, i) => {
        return (
          <div key={i} className="card">
            <img src={cloth.images[0]} alt="" />
          </div>
        )
      })

      }
    </div>
  )
}

export default Clothing