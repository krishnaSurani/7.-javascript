// slider-2
var counter=0;
function slider()
{
    var arr=document.getElementsByClassName('img');

    for(var i=0;i<arr.length;i++)
    {
        arr[i].style.display="none";
    }
    if(counter==arr.length)
    {
        counter=0;
    }

    arr[counter].style.display="block"
    counter++;

    setTimeout(slider,2000);
}
slider()