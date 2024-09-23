function data() {
    fetch(`http://localhost:3000/electronic`)
            .then(res => res.json())
            .then((res) => {
                    document.querySelector(".laptop").innerHTML = add(res)
 
            })
            .catch(err => console.log(err));
 
 }
 data()
 
 function add(data) {
    return data.map((el, i) => {
            return `
            <div id="box">
                            <div id="img">
                                    <img src="${el.image}" alt="">
                            </div>
                            <div id="info">
                                   <span class="about">${el.about}</span>
                                   <p class="rate">⭐⭐⭐⭐${el.rate}</p>
                                   <span class="price">${el.price}</span>
                                   <span class="dis">${el.dis}</span><br>
                                   <span class="deli">${el.deli}</span><br>
                                    <button onclick="cart(${el.id})">Add To Cart</button>
                            </div>
                    </div>
            `
    }).join("")
 }
 
 