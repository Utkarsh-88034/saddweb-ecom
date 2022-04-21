import React from "react";
import styled from "styled-components";

const IngredientsBox = ({detail,type}) => {
    const IngredientBox =styled.div`
    width:320px;
    height:500px;
    border-radius:12px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    position:relative;
    top:0;
    `;
  const Ingredientdetail=styled.div`
color:white;
align-item:center;
position:absolute;
bottom:90px;
left:10px;
flex-wrap:wrap;
padding:15px;
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
  ` 
  const Ingredienttype=styled.p`
  color:white;
  position:absolute;
bottom:0px;
left:25px;
font-family: 'Neue Montreal';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 48px;
  `

  return (


<IngredientBox>
<Ingredientdetail>{detail}</Ingredientdetail>
<Ingredienttype>{type}</Ingredienttype>
</IngredientBox>

    )
}

export default IngredientsBox