let thumbnail = document.getElementById('thumbnail');
let realName = document.getElementById('real-name');
let ingredientBox = document.getElementById('ingredient-box');
let recipeBox = document.getElementById('recipe-box');

window.onload = ()=>{
    let category = localStorage.getItem("category");
    let recipe = localStorage.getItem("recipe");

    axios.get("http://3.15.209.91:3000/recipe/")
    .then(response=>{
        for(i in response.data[category]){
            if(response.data[category][i].name == recipe){
                thumbnail.src = response.data[category][i].thumbnail;
                realName.innerHTML = response.data[category][i].realName
            }
        }
    })
    .catch(error=>{
        console.log(error);
    })

    axios.get("http://3.15.209.91:3000/data/"+category+"/"+recipe)
    .then(response=>{
        let splitData = response.data.split("---");

        let ingredientData = splitData[1].split('\r\n');
        console.log(splitData[1]);
        let recipeData = splitData[2].split("asdfasdfasfd");
        let imageData = splitData[3].split('\n');
        console.log(imageData)
        let html = "";
        for(i in ingredientData){
            if(ingredientData[i] == '') continue;
            html += '<div class="list">';
            html += '<p>'+ingredientData[i].split("->")[0]+'</p>';
            html += '<p>'+ingredientData[i].split("->")[1]+'</p>'
            html += '</div>';
        }
        ingredientBox.innerHTML += html;
        
        html = ""
        for(i in recipeData){
                let nowText = recipeData[i].replace(/\r\n/g, "");
                if(nowText == '') continue;
                html += '<div class="list"><div class="text">';
                html += '<h2>' + (i ) + '.</h2>';
                html += '<ul>';
                html += '<li>'+nowText+'</li>';
                html += '</ul></div>';
                html += '<div class="image">';
                html += '<img src="'+imageData[i]+'"/>';
                html += '</div></div>';
        }

        recipeBox.innerHTML += html;
    })
    .catch(error=>{
        console.log(error);
    })
}