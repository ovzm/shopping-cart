import React, {useState, useContext} from 'react'
import { CiSearch } from "react-icons/ci";

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  const { setProducts } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    setProducts(products)
    setSearchValue('');
  }

  return (
    <form className='search-bar' onSubmit={handleSearch}>
        <input type="search" value={searchValue} placeholder='Buscar produtos' className='search__input' required onChange={(e) => setSearchValue(e.target.value)} />
        <button type='submit' className='search__button'>
            <CiSearch />
        </button>
    </form> 
  )
}

export default SearchBar