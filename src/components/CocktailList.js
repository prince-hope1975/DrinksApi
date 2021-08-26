import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()
  // console.log(loading,cocktais)
  if (loading){
    return <Loading />
  }
  if(cocktails.length < 1){

   return  <h2 className="section-title">
      No cocktails matched your search
    </h2>
  }
  return (
    <section>
      <h2 className="section-title">
Cocktails
      </h2>
<div className="cocktails-center">
  {cocktails.map((item)=>{
  return <Cocktail{...item} key={item.id} />}) }</div>    </section>
  )
}

export default CocktailList
