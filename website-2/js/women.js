function data() {
    fetch(`http://localhost:3000/women`)
            .then(res => res.json())
            .then((res) => {
                    document.getElementById("productBox").innerHTML = add(res)

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
                                    <snap class="ps-3 text-sm text-[#bf4815] font-medium">${el.dis}</span>
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
      

