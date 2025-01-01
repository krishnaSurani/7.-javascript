function singlrPage() {
    let data = new URLSearchParams(window.location.search);
    let id = data.get("id");
    console.log(id);


    fetch(`http://localhost:3000/women/${id}`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("singleBox").innerHTML = singlePageView(res)
            document.getElementById("cart").addEventListener("click", () => {
                AddCart(res)
            })
        })
}

function singlrPage2() {
    let data = new URLSearchParams(window.location.search);
    let id = data.get("id");

    fetch(`http://localhost:3000/men/${id}`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("singleBox").innerHTML = singlePageView(res)
            document.getElementById("cart").addEventListener("click", () => {
                AddCart(res)
            })
           
        })
}

function singlePageView(ele) {
    return `
            <div id="main" class="w-[90%] m-auto flex justify-evenly items-center">
            <div id="img">
                <img src="${ele.image}" class="h-[400px]">
            </div>
            <div id="text" class=" h-[450px] w-[45%]">
                <div class=" h-[150px] flex flex-wrap justify-between items-center">
                    <div class="flex h-[30px] w-[40%]">
                        <span class="text-[#E58633] text-xs font-medium font-[poppins]">Best Seller</span>
                        <img src="image/bell.gif" alt="" class="h-[25px] w-[40px] ps-2">
                        <span class="text-sm text-[#1d1d1d] font-[poppins]"><span class="ps-3 pe-2">|</span>Titan</span> 
                    </div>
                    <div  class="flex h-[30px] w-[40%]">
                        <i class="fa-solid fa-star" style="color: #dda243;"></i>    
                            <p class="text-xs font-medium font-[poppins] ps-2"><span>4.3</span><span class="ps-3 pe-3">|</span> <span>449 Reviews</span></p>
                    </div>
                    <div class="h-[100px] w-full">
                        <h1 class="text-base text-[#1d1d1d] font-[poppins]">${ele.about}</h1>
                        <p class="text-xs text-[#999]">NS2656WM01 <span class="ps-2 pe-2 text-black">|</span>${ele.type}</p>
                        <h2 class="font-[poppins] pt-3"><span class="font-medium ">₹ ${ele.price}</span> <span class="text-[#999] ps-2">MRP </span><span class="line-through text-[#999]">₹ ${ele.disprice}</span> <span class="text-[#45a03f] text-sm ps-2">${ele.dis}% off</span></h2>
                        <span class="text-xs text-[#999] font-[poppins] font-normal">Inclusive of all taxes*</span>
                    </div>
                </div>

                <div class="h-14 w-full flex justify-between items-center">
                <button class="h-full w-[48%] bg-[#FEFAF5]"  style="border: 1px solid #C48D35;" id="cart">ADD TO CART</button>
                    
                    <button class="h-full w-[48%] bg-[#C48D35] ">BUY NOW</button>
                </div>

                <div class="h-[50px] w-full border mt-4 bg-gradient-to-r from-[#FCF8F5] to-[#ECDACA] flex justify-between items-center">
                    <img src="image/i59.jpg" alt="" class="h-full w-[90px]">
                
                    <div class="w-[83%] h-full">
                        <p class="text-sm text-[#1d1d1d]"><b>Partner Offers</b></p>
                        <span class="text-[#222] font-[poppins] text-[10px]">Get 10% OFF* on your Successful Order. T&C</span>
                    </div>    
                 </div>

                <div class="h-[80px] w-full mt-4 flex justify-evenly items-center text-center">
                    <div class="h-full w-[18%] flex justify-evenly items-center flex-col">
                        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwf1ad66b9/images/PDP/usp-warranty-d.svg" alt="" class="h-[30px]"><span class="text-[11px]">24 Months <br>  Warranty</span>
                    </div>
                    <div class="h-full w-[18%] flex justify-evenly items-center flex-col text-center">
                        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc6cc1fd3/images/PDP/usp-shipping-d.svg" alt="" class="h-[30px]"><span class="text-[11px]">Free Shipping <br>  Countrywide</span>
                    </div>
                    <div class="h-full w-[18%] flex justify-evenly items-center flex-col text-center">
                        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwde1071c9/images/PDP/usp-return-d.svg" alt="" class="h-[30px]"><span class="text-[11px]">Easy <br> Return</span>
                    </div>
                    <div class="h-full w-[18%] flex justify-evenly items-center flex-col text-center">
                        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw38c102a4/images/PDP/usp-pod-d.svg" alt="" class="h-[30px]"><span class="text-[11px]">Pay on Delivery<br>  Available</span>
                    </div>
                    <div class="h-full w-[18%] flex justify-evenly items-center flex-col text-center">
                        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw6b55ed46/images/PDP/usp-service-d.svg" alt="" class="h-[30px]"><span class="text-[11px]">Serviced <br> Across India</span>
                    </div>
                </div>

            </div>
            </div>
  `}









function AddCart(res) {

    fetch(`http://localhost:3000/cart?id=${res.id}`)
        .then((r) => { return r.json() })
        .then((Res) => {
            if (Res.length > 0) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Item is Already Present in Cart....",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                fetch(`http://localhost:3000/cart`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ ...res, queinty: 1 })
                    })
                    .then((r) => r.json())
                    .then((res) => console.log(res),
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Item is Successfully add in Cart...",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    )
                    .catch((err) =>
                        console.log(err),

                    )
            }
        })


}




singlrPage()
singlrPage2()