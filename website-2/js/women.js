function data() {
    fetch(`http://localhost:3000/women`)
            .then(res => res.json())
            .then((res) => {
                    document.getElementById("productBox").innerHTML = add(res)
                    op1(res)
                    let PR1 = document.getElementById("br1")
                    PR1.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts1 = br1(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts1);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    }) 
                    let PR2 = document.getElementById("br2")
                    PR2.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts2 = br2(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts2);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    }) 
                    let PR3 = document.getElementById("br3")
                    PR3.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts3 = br3(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts3);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let PR4 = document.getElementById("br4")
                    PR4.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts4 = br4(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts4);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let PR5 = document.getElementById("br5")
                    PR5.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts5 = br5(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts5);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    }) 
                    let PR6 = document.getElementById("br6")
                    PR6.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts6 = br6(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts6);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let PR7 = document.getElementById("br7")
                    PR7.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts7 = br7(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts7);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
        
                    let sm1 = document.getElementById("sm1")
                    sm1.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts8 = sm_1(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts8);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let Sm2 = document.getElementById("sm2")
                    Sm2.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts9 = sm_2(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts9);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sm3 = document.getElementById("sm3")
                    sm3.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts10 = sm_3(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts10);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sm4 = document.getElementById("sm4")
                    sm4.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts11 = sm_4(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts11);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sm5 = document.getElementById("sm5")
                    sm5.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sm_5(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
 
                    let sc1 = document.getElementById("sc1")
                    sc1.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_1(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc2 = document.getElementById("sc2")
                    sc2.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_2(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc3 = document.getElementById("sc3")
                    sc3.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_3(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc4 = document.getElementById("sc4")
                    sc4.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_4(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc5 = document.getElementById("sc5")
                    sc5.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_5(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc6 = document.getElementById("sc6")
                    sc6.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_6(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc7 = document.getElementById("sc7")
                    sc7.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_7(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc8 = document.getElementById("sc8")
                    sc8.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_8(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let sc9 = document.getElementById("sc9")
                    sc9.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = sc_9(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })

                    
                    let dc1 = document.getElementById("dc1")
                    dc1.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_1(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc2 = document.getElementById("dc2")
                    dc2.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_2(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc3 = document.getElementById("dc3")
                    dc3.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_3(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc4 = document.getElementById("dc4")
                    dc4.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_4(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc5 = document.getElementById("dc5")
                    dc5.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_5(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc6 = document.getElementById("dc6")
                    dc6.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_6(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc7 = document.getElementById("dc7")
                    dc7.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_7(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })
                    let dc8 = document.getElementById("dc8")
                    dc8.addEventListener("change",function(){
                        if(this.checked){
                            console.log("click....")
                            const filteredProducts12 = dc_8(res);
                            document.getElementById("productBox").innerHTML = add(filteredProducts12);
                        }
                        else{
                            console.log("not click....")
                            document.getElementById("productBox").innerHTML=add(res)
                        }
                    })


            })
            .catch(err => console.log(err));





 
 }
 data()

 function add(data) {
    return data.map((el, i) => {
            return `
                         <a href="singalpage.html?id=${el.id}"> <div class="h-[500px] pt-2 font-[poppins]">
                                <div id="img" class="h-[70%] w-full"><img src="${el.image}" alt="" class="h-full w-full"></div>
                                <div id="text" class="p-2">
                                    <p class="text-[#bf4815] text-xs font-medium pb-2">BEST SELLER</p>
                                    <h5 class="text-base font-medium cursor-pointer hover:underline ">${el.about}</h5>
                                    <p class="text-[#999] text-sm pt-1 ">${el.type}</p>
                                    <span class="pt-1 text-lg font-medium">₹${el.price}</span>
                                    <span class="pt-1 text-sm font-medium line-through ps-2 text-[#999] ">₹${el.disprice}</span>
                                    <snap class="ps-3 text-sm text-[#bf4815] font-medium">${el.dis}% off</span>
                                </div>
                           </div>
                           </a> 
            `
    }).join("")
 }



 function br1(arr){
  return arr.filter((el) => el.brand == "Titan"); 
}
function br2(arr){
  return arr.filter((el) => el.brand == "Fastrack"); 
}
function br3(arr){
  return arr.filter((el) => el.brand == "Sonata"); 
}
function br4(arr){
  return arr.filter((el) => el.brand == "Anne Klein"); 
}
function br5(arr){
  return arr.filter((el) => el.brand == "Kenneth Cole"); 
}
function br6(arr){
  return arr.filter((el) => el.brand == "Tommy Hilfiger"); 
}
function br7(arr){
  return arr.filter((el) => el.brand == "Nebula"); 
}

function sm_1(arr){
  return arr.filter((el) => el.SM == "Metal"); 
}
function sm_2(arr){
  return arr.filter((el) => el.SM == "Leather"); 
}
function sm_3(arr){
  return arr.filter((el) => el.SM == "Stainless Steel"); 
}
function sm_4(arr){
  return arr.filter((el) => el.SM == "Mesh"); 
}
function sm_5(arr){
   return arr.filter((el) => el.SM == "Silicone"); 
}

function sc_1(arr){
    return arr.filter((el) => el.SC == "Black"); 
 }
 function sc_2(arr){
    return arr.filter((el) => el.SC == "White"); 
 }
 function sc_3(arr){
    return arr.filter((el) => el.SC == "Blue"); 
 }
 function sc_4(arr){
    return arr.filter((el) => el.SC == "Peach"); 
 }
 function sc_5(arr){
    return arr.filter((el) => el.SC == "Pink"); 
 }
 function sc_6(arr){
    return arr.filter((el) => el.SC == "Golden"); 
 }
 function sc_7(arr){
    return arr.filter((el) => el.SC == "Silver"); 
 }
 function sc_8(arr){
    return arr.filter((el) => el.SC == "Brown"); 
 }
 function sc_9(arr){
    return arr.filter((el) => el.SC == "Rose Gold"); 
 }


 function dc_1(arr){
    return arr.filter((el) => el.DC == "BLACK"); 
 }
 function dc_2(arr){
    return arr.filter((el) => el.DC == "ROSE GOLD"); 
 }
 function dc_3(arr){
    return arr.filter((el) => el.DC == "WHITE"); 
 }
 function dc_4(arr){
    return arr.filter((el) => el.DC == "BLUE"); 
 }
 function dc_5(arr){
    return arr.filter((el) => el.DC == "GOLD"); 
 }
 function dc_6(arr){
    return arr.filter((el) => el.DC == "PURPLE"); 
 }
 function dc_7(arr){
    return arr.filter((el) => el.DC == "SILVER"); 
 }
 function dc_8(arr){
    return arr.filter((el) => el.DC == "BROWN"); 
 }



 function op1(arr) {

    let opt1 = document.getElementById("opt")
    opt1.addEventListener("change", () => {

        let compare = opt1.value
        console.log(compare);


        if (compare == 'hl') {
            let anss = arr.sort((a, b) => {
                return b.price - a.price
            })

            document.getElementById("productBox").innerHTML = add(anss)
        }
        if (compare == 'lh') {
            let anss = arr.sort((a, b) => {
                return a.price - b.price
            })

            document.getElementById("productBox").innerHTML = add(anss)
        }
        if (compare == 'dis') {
            let anss = arr.sort((a, b) => {
                return b.dis - a.dis
            })

            document.getElementById("productBox").innerHTML = add(anss)
        }
    })}




     // accordion.js

document.querySelectorAll("#toggle").forEach((button) => {
        button.addEventListener("click", () => {
          const content = button.nextElementSibling;
      
      
          // Toggle visibility
          if (content.classList.contains("hidden")) {
            // Close other open accordions (optional)
            document.querySelectorAll("#slidtoggle").forEach((item) => {
              item.classList.add("hidden");
            });
      
            content.classList.remove("hidden");
          } else {
            content.classList.add("hidden");
          }
        });
      });
      

