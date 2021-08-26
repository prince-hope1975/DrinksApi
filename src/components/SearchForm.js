import React,{useEffect} from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {
const {setSearchTerm}=useGlobalContext()
  const searchValue = React.useRef("");
  const searchCocktail =()=>{
    setSearchTerm(searchValue.current.value)
  }
  useEffect(() => {
    searchValue.current.focus()
  },[])
  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={(e)=>e.preventDefault()}>

      <div className="form-control">
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
        <label htmlFor="name">Search your favourite cocktail</label>
      </div>
      </form>
    </section>
  );
}

export default SearchForm
