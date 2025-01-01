function AddToCart(){
    fetch(`http://localhost:3000/cart`)
    .then((r)=>{return r.json()})
    .then((res)=>{
        console.log(res)
        document.getElementById("cartbox").innerHTML=cartView(res)
        document.getElementById("price").innerHTML=cartprice(res)
    })
}


function cartView(arr){
    let save=0
    let orderV=0
    let dis=0
    let add=0
    
    return arr.map((el)=>{       
        save+=(el.disprice - el.price) * el.queinty
        orderV+=el.disprice*el.queinty
        dis+=((el.disprice*el.dis)/100)*el.queinty
        add+=el.price*el.queinty
        document.getElementById("save").innerHTML=save
        document.getElementById("orderV").innerHTML="₹ "+orderV
        document.getElementById("dis").innerHTML="- ₹ "+dis
        document.getElementById("total").innerHTML="₹ "+add
        
        return `
            <div class="h-[290px] w-full flex justify-evenly items-center flex-wrap border mt-4">
                <div class="h-[55%] w-[20%]">
                    <img src="${el.image}">
                </div>

                <div class="text h-[55%] w-[70%] ">
                    
                    <span class="text-[11px] text-[#999] font-[Poppins]">${el.brand}</span>
                    <button class="h-[20px] w-[20px] text-center ms-[90%]" onclick="del(${el.id})"><i class="fa-solid fa-x fa-sm"></i></button>
                    <br>
                    <a href="" class="text-sm text-[#212121] cursor-pointer font-[Poppins] font-medium ">${el.about}</a><br>
                    <span class="text-lg font-[Poppins] font-semibold text-[#1d1d1d] pe-2">₹${el.price}</span>
                    <span class="text-[#999] text-sm text-[Poppins]">MRP<span class="ps-2 line-through font-[poppins]">₹ ${el.disprice}</span></span>
                    <span class="ps-2 text-[#45a03f] text-sm font-[Poppins]">${el.dis}% off</span><br>
                    <button onclick="Addcart(${el.id} , ${el.queinty} , 'dec')" class="h-[30px] w-[30px] border mt-3 text-center text-lg">-</button>
                    <input type="text" value="${el.queinty}" disabled id="quan" class="h-[30px] w-[30px] border mt-3 text-center">
                    <button onclick="Addcart(${el.id} , ${el.queinty} , 'inc')" class="h-[30px] w-[30px] border mt-3">+</button>
                </div>
                    <div class="h-[1px] w-[90%] border"></div>
                <div class="h-[70px] w-[90%] flex justify-evenly items-center flex-wrap">
                    <p class="text-xs text-[#212121] font-[Poppins]"><img src="image/i63.svg" alt="" class="float-start pe-2"> 7 Days Return</p>
                    <p class="text-xs text-[#212121] font-[Poppins]"><img src="image/i64.svg" alt="" class="float-start pe-2"> Dispatch by31st Dec 2024</p>

                </div>
            </div>



        `
    }).join("")
}

// function cartprice(arr){
//     let add = 0;
//     let discount= 0 ;

//     return  arr.map((el)=>{
//         add+=el.price * el.queinty
//         discount = (el.disprice * el.dis) / 100
//         console.log(add)
//         document.getElementById("price").innerHTML="Grand Total : ₹" + add.toFixed(2);
//         return`
//             <div class="h-[400px] w-full border mt-4">
//                 <div class="h-[40px] w-full border bg-[#f1fff1] text-center pt-3">
//                     <p class="text-xs text-[#1d1d1d] font-[Poppins]">You’re saving ₹ <span class="text-[#45a03f] font-semibold">${(el.disprice - el.price) * el.queinty}</span> on this purchase</p>
//                 </div>
//                 <div class="h-[330px] w-[90%] m-auto mt-3 p-3 font-[Poppins]">
//                     <span class="text-sm font-medium">Order Summary</span>
//                     <hr class="mt-3">
//                     <p class="text-sm pt-[10%] text-[#6c6c6c]"><span>Order Value</span><span class="ms-[50%] text-base">₹ ${el.disprice * el.queinty}</span></p>
//                     <p class="text-sm pt-3 text-[#6c6c6c]"><span>Shipping</span><span class="ms-[59%] text-base text-[#45a03f]">Free</span></p>
//                      <p class="text-sm pt-3 text-[#6c6c6c]"><span>Product Discount</span><span class="ms-[35%] text-base">- ₹ ${discount * el.queinty}</span></p>
//                      <hr class="mt-[10%]">
                    
//                      <p class="text-base pt-3 text-[#1d1d1d] font-medium"><span>Grand Total</span><span class="ms-[48%] text-base"> ₹ ${add}</span></p>

//                      <button class="border p-3 w-[100%] bg-[#dda243] text-[#000000de] font-[Poppins] text-sm mt-5">PROCEED TO CHECKOUT</button>
//                 </div>
//             </div>`
// }).join("")
    
// }





function Addcart(id,queinty, clickbtn) {
    let a = queinty;
    if (clickbtn == 'inc') {
        a = a + 1
    } else if (clickbtn == 'dec') {
        a = a - 1
        if (a < 1) {
          
          document.getElementById("Add").setAttribute("disabled");
        }
    }
    

    fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({queinty : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })

}

function del(id){
    fetch(`http://localhost:3000/cart/${id}`,{
        method :'DELETE',
    })
    .then((res)=>{
        window.location.reload() 
    }) 
}

AddToCart()