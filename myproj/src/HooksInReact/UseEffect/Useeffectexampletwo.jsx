import React, { useEffect, useState } from 'react';
import './Useeffectexampletwo.css'
const apiurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Useeffectexampletwo = () => {
    const [drinks, setDrinks] = useState([]);
    const[searchterm,setsearchterm]=useState('');
    const fetchingDataFromApi = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        setDrinks(data.drinks);
    };

    useEffect(() => {
        const userurl=`${apiurl}${searchterm}`
        fetchingDataFromApi(userurl);
    }, [searchterm]);
    return (
       <div>
        <div className="searchbar">
            <input type="text" name=""placeholder='What would you like to have...' id="" value={searchterm} onChange={(evt)=>setsearchterm(evt.target.value)} />
        </div>
         <div className="mail">  
            {drinks && drinks.map((eachdrink, index) => {
                return (
                   <div className='outer'> 
                   <div>
                   <img src={eachdrink.strDrinkThumb} alt={eachdrink.strDrink} />
                   <h3>{eachdrink.strDrink}</h3>
                   </div>
                   </div>
                );
            })}
        </div>
       </div>
    );
}

export default Useeffectexampletwo;





