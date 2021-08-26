import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searcTerm, setSearchTerm] = useState("a");
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searcTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        // console.log([drinks])
        const newCocktails = drinks.map(
          ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          }
          );
          setCocktails(newCocktails)
          console.log(newCocktails)
      } 
      else {
        setCocktails([]);
      }
      setLoading(false);
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      }
  },[searcTerm]);
  useEffect(() => {
    fetchDrinks();
    
  }, [searcTerm,fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        searcTerm,
        setSearchTerm,
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
