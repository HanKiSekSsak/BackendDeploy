let recipeForm = document.getElementById("secret-form");
let recipeName = document.getElementById("recipe-name");
let content = document.getElementById('content');

let category = ""
let RecipeObject = new Object();

let SelectRecipe = (e)=>{
    if(!e.target.innerHTML.includes('class=\"content\"')){
        let html = e.target.parentElement.innerHTML;
        let htmlArr = html.split("<p>");
        let name = htmlArr[1].split("</p>")[0];
        
        recipeName.value = name;
        localStorage.setItem("recipe",name);
        recipeForm.submit();
    }
}


window.onload = ()=>{
    category = localStorage.getItem("category");
    axios.get("http://3.15.209.91:3000/recipe")
    .then(response =>{
        RecipeObject = response.data;
        let html = ""
        html += '<div class="top">';
        html += '<div class="content" onclick="SelectRecipe(event)">';
        html += '<div class="content-data">';
        html += '<img src="'+RecipeObject[category][0].thumbnail+'"/>';
        html += '<p>' + RecipeObject[category][0].name+ '</p>';
        html += '</div></div>';
        html += '<div class="content" onclick="SelectRecipe(event)">';
        html += '<div class="content-data">';
        html += '<img src="'+RecipeObject[category][1].thumbnail+'"/>';
        html += '<p>' + RecipeObject[category][1].name+ '</p>';
        html += '</div></div>';
        html += '</div>';

        html += '<div class="end">';
        html += '<div class="content" onclick="SelectRecipe(event)">';
        html += '<div class="content-data">';
        html += '<img src="'+RecipeObject[category][2].thumbnail+'"/>';
        html += '<p>' + RecipeObject[category][2].name+ '</p>';
        html += '</div></div>';
        html += '<div class="content" onclick="SelectRecipe(event)">';
        html += '<div class="content-data">';
        html += '<img src="'+RecipeObject[category][3].thumbnail+'"/>';
        html += '<p>' + RecipeObject[category][3].name+ '</p>';
        html += '</div></div>';
        html += '</div>';

        content.innerHTML = html;

    })
    .catch(error =>{
        console.log(error);
    })
}