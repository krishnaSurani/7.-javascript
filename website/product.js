function data() {
   fetch(`http://localhost:3000/product`)
           .then(res => res.json())
           .then((res) => {
                   document.querySelector(".productBox").innerHTML = add(res)

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
                                   <span class="modal">${el.modal}</span><br>
                                   <span class="about">${el.about}</span>
                                   <p class="rate">⭐⭐⭐⭐${el.rate}</p>
                                   <span class="dis">${el.dis}</span>
                                   <span class="price">${el.price}</span><br>
                                   <span class="deli">${el.deli}</span><br>
                                   <button  onclick="cart(${el.id})">Add To Cart</button>
                           </div>
                   </div>
           `
   }).join("")
}

function cart(i) {
        fetch(`http://localhost:3000/product/${id}`)
                .then(res => res.json())
                .then((res) => {
                        fetch(`http://localhost:3000/cart`,
                                {
                                        method: "POST",
                                        headers: {
                                                "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(res)
                                })
                                .then(res => res.json())
                                .then((res) => {
    
                                        console.log(res);
    
    
                                })
                                .catch(err => console.log(err));
    
                })
                .catch(err => console.log(err));
    
    }
    
    
    fetch(`http://localhost:3000/cart`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        document.querySelector(".box").innerHTML=show(res);
        tprice(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    
    
    // price
    
    function tprice(res)
    {
        let sum=0;
    
        res.forEach(element => {
            sum += +element.price;
        });
    
        document.querySelector("#t-price").innerText="₹"+sum ;
    }
    
    
    function show(arr)
    {
        return arr.map((element,i)=>{
            return `
            
           
           <div class="products">
                  <div class="image"> 
                      <img src="${element.image}"  alt="${element.modal}" > 
                  </div>
                  <div id="p-text">
                        <div class="rate">
                        <h4>${element.modal}</h4>
                           <p class="p1">${element.about}</p>
                           <p class="p3">${element.deli}</p>
                        </div>
                        
                        <p class="price1">price : ${element.price}</p>
                        <button class="delete" onclick="deleteitem(${element.id})">Delete</button>
                        <a href="index.html">See more like this</a>                   
                  </div>
              </div>    
            
            
            `
        })
    }
    
    
    
    
    
    function deleteitem(id) {
        fetch(`http://localhost:3000/cart/${id}`, {
          method: 'DELETE',
        })
          .then((res)=>{
            return res.json();
          })
       
    
        .then((res)=>{
            fetch(`http://localhost:3000/cart`)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                document.querySelector(".box").innerHTML=show(res);
                tprice(res);
            })
            .catch((err)=>{
                console.log(err);
                
            })
        })
          .catch((err) => {
            console.log(err);
          });
      }