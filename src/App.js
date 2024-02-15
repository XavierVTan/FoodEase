import './App.css';
import "./key";
import Axios from "axios";
import {useState} from "react";
import RecipeTile from './RecipeTile';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")

  const YOUR_APP_ID = "82f4367a";
  const YOUR_APP_KEY = "3069f5c1fd2cdefb19d9357fac7f646a";
  let apiurl = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  
  const getRecipes = async () => {
    setIsLoading(true);
    const url = apiurl;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data);
    console.log(data.count);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Food Recipe </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text" className="app__input" placeholder="Enter Ingredients" value={query} onChange={(e) => setQuery(e.target.value)} />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app_healthlabels">
          <option onClick={() => sethealthLabel("vegan")} >Vegan</option>
          <option onClick={() => sethealthLabel("kidney-friendly")} >Kidney-Friendly</option>
          <option onClick={() => sethealthLabel("dairy-free")} >Dairy-free</option>
          <option onClick={() => sethealthLabel("gluten-free")} >Gluten-free</option>
          <option onClick={() => sethealthLabel("low-sugar")} >Low-sugar</option>
          <option onClick={() => sethealthLabel("egg-free")} >Egg-Free</option>
        </select>
      </form>

     <div className="app__recipes">
      {recipes.map(recipe =>{
        return <RecipeTile recipe={recipe} />
      })}
     </div>

    </div>
  );
}

export default App;
