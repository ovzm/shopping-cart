import React, {useState} from 'react'
import { CiSearch } from "react-icons/ci";

import './SearchBar.css';

function SearchBar() {

    const [searchValue ,setSearchValue] = useState('');

  return (
    <form className='search-bar'>
        <input type="search" value={searchValue} placeholder='Buscar produtos' className='search__input' required onChange={(e) => setSearchValue(e.target.value)} />
        <button type='submit' className='search__button'>
            <CiSearch />
        </button>
    </form> 
  )
}

export default SearchBar