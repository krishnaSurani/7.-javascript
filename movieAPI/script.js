fetch('https://imdb-top-100-movies.p.rapidapi.com/',{
    method : 'GET',
    headers :{
        'x-rapidapi-key': 'c4dc67c6d3msh15c7086e92e1d48p1707a0jsnb49b5608e743',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
})

.then((res)=>{
    return res.json()
})
.then ((res)=>{
    document.getElementById('movie').innerHTML=view(res);
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})



function view(res){
    return res.map((el, i) => {
        return `
        <div id="box">
                        <div id="img">
                                <img src="${el.image}" alt="">
                        </div>
                        <div class="about">
                                <span class="title">${el.title}</span><br>
                                <span class="rating">${el.rating} ⭐</span>
                        </div>
        </div>
        `
}).join("")
}