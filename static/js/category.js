let secretForm = document.getElementById('secret-form');
let category = document.getElementById('form-category');
let listBox = document.getElementById('list-box');
let categoryInput = document.getElementById('category');

const SearchList = ['찌개', '파스타', '밥', '찜'];

let SubmitList = (e)=>{
    category.value = e.target.innerHTML;
    localStorage.setItem("category",category.value);
    secretForm.submit();
}

let CheckSearch = (e)=>{
    let text = e.target.value;

    let appendList = [];

    console.log(text)

    if(text != ""){    
        for(let i = 0; i<SearchList.length; i++){
            console.log(SearchList[i].includes(text));  
            if(SearchList[i].includes(text) == true){
                appendList.push(SearchList[i]);
            }
        }

        let html = ""
        console.log(appendList)

        if(appendList.length != 0){
            for(let i = 0; i<appendList.length; i++){
                html += '<div class="list" onclick="SubmitList(event)">'+appendList[i]+'</div>'
            }
    
        }
        listBox.innerHTML = html;
    }
    else{
        
        let html = ""
        for(let i = 0; i<SearchList.length; i++){
            html += '<div class="list" onclick="SubmitList(event)">'+SearchList[i]+'</div>'
        }

        listBox.innerHTML = html;
    }
}  