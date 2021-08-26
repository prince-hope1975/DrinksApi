import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    console.log(id);
    setLoading(true);
    async function getCocktails() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data, "hi");
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,image,info,category,instructions,glass,ingredients
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(false);
        }
        setLoading(false)
      } catch (e) {}
    }
    getCocktails();
  }, [id]);

  if(loading){
    return <Loading/>
  }
  if(!cocktail){
    return <h2 className="section-title">
      No cocktail to display
    </h2>
  }
  const {name,image,category, glass, instructions, ingredients,info}= cocktail
          console.log(cocktail);

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span> {instructions}        </p>
        </div>
        <p>
          <span className="drink-data">ingredients:</span>
          {ingredients.map((item,index)=>{
            return item? <span key={index}>{item}</span>: null
          })}
        </p>
      </div>
    </section>
  );
};

export default SingleCocktail;
