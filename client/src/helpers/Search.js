import React, { useEffect, useState } from 'react'

const Search = ({ clothing, setFilteredProducts }) => {

  const [ filters, setFilters ] = useState({ searchTerm: '' })

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredProducts(clothing.filter(clothes => {
      return regexSearch.test(clothes.name)
    }))
  }, [setFilteredProducts, filters, clothing])

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    console.log('New Obj', newObj)
    setFilters(newObj)
  }

  return (
    <>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleFilterChange} value={filters.searchTerm}/>
    </>
  )
}

export default Search