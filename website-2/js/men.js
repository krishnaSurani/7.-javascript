function data() {
    fetch(`http://localhost:3000/men`)
            .then(res => res.json())
            .then((res) => {
                    document.querySelector(".menwatch").innerHTML = add(res)
 
            })
            .catch(err => console.log(err));
 
 }
 data()

 function add(data) {
    return data.map((el, i) => {
            return `
                           <div class="h-[500px] pt-2 font-[poppins]">
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
            `
    }).join("")
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
      