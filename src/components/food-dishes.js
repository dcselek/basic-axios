import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FoodDishes = () => {

    const [dish, setDishes] = useState("")

    const reloadPage = () => {
        window.location.reload();
    }
    

    useEffect(()=>{
        axios
            .get("https://foodish-api.herokuapp.com/api/")
            .then(res => setDishes(res.data.image)) 
    },[]);

    console.log(dish);
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 style={{color:"white"}}>Foods</h1>
            <button style={{marginBottom:"12px", padding:"8px", borderRadius:"4px", }} onClick= {reloadPage}>Random Food Dish</button>
            <img style={{maxWidth:"1000px", maxHeight:"800px"}} src={dish} alt={dish}></img>
        </div>
    );
};

export default FoodDishes;