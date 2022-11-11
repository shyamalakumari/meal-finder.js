var search=document.getElementById("search");
var submit=document.getElementById("submit");
var mealsEle=document.getElementById("meals");
var resultHeading=document.getElementById("result-heading");


function searchMeal(e)
{
    e.preventDefault();
    const term = search.value;
    console.log(term);
    // resultHeading.innerHTML="";
    if(term)
    {
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
       .then((res) => res.json())
       .then((data) =>{ console.log(data)
       resultHeading.innerHTML=`<h2> search results for:'${term}':</h2>`;
       if(data.meals===null)
       {
        resultHeading.innerHTML=`<p> There are no such results.Try again!</p>`;
       }
       else
       {
        mealsEle.innerHTML=data.meals
        .map(meal=>
            `<div classs="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div ID="${meal.idMeal}">
            <h3 id="${meal.strMeal}"></h3>
            </div>`
            )
       }
    } );
    }
    else{
        alert("please enter a search item")
    }
}
submit.addEventListener("submit",searchMeal)