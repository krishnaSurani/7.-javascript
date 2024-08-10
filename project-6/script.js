let a=document.getElementById("pre");
let b=document.getElementById("next");


a.addEventListener("click",pre)
b.addEventListener("click",next)

let arr =
[
    "https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg",
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    "https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg",
    "https://wallpapers.com/images/hd/hd-nature-trees-on-grass-rwujzayqg8ip7kyy.jpg"
]

    document.querySelector("#img").innerHTML=`<img src="${arr[0]}" height="600px"; width="800px">`
let ind = 0;
function next()
{
    if(ind < arr.length-1)
    {
        ind++;
        document.querySelector("#img").innerHTML=`<img src="${arr[ind]}" height="600px"; width="800px">`
    }
    else{
        ind=0;
        document.querySelector("#img").innerHTML=`<img src="${arr[ind]}" height="600px"; width="800px">`
    }

     
}






function pre()
{
    if(ind > 0)
        {
            ind--;
            document.querySelector("#img").innerHTML=`<img src="${arr[ind]}" height="600px"; width="800px">`
        }
        else{
            ind=arr.length-1;
            document.querySelector("#img").innerHTML=`<img src="${arr[ind]}" height="600px"; width="800px">`
        }
    
}
