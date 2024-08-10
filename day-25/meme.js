do{
   meme();
}
while(false);


function meme()
{
let arr=[
        {
            Image:'https://i.pinimg.com/originals/be/90/cb/be90cbd6c02b7ee1a9ccd38d17525efe.webp'
        },
        {
            Image:'https://i.pinimg.com/736x/b5/1b/1f/b51b1f7789d774fe12c7d1c77e5d62e0.jpg',
        },
        {
            Image:'https://splitmetrics.com/wp-content/uploads/2023/03/meme-13-3.png',
        },
        {
            Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfyVleh18Etdk_mNJn5fyOY9lAW6cKTdCyQ&s',
        },
        {
            Image:'https://i.pinimg.com/474x/9e/2c/ab/9e2cab3be066971811d84d94ca316aa8.jpg',
        },
        {
            Image:'https://i.pinimg.com/originals/3e/fe/97/3efe97e20b72ec6bcbb276462625a865.jpg',
        },
        {
            Image:'https://memes.co.in/Uploads/Media/Sep19/Sat28/272/82aa8647.jpg',
        },
        {
            Image:'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fpa8qdea3cnlc1.jpeg',
        },
        {
            Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIIKnJwHxjvczs4n-yobfUFesCd3yKnKwjw&s',
        },
        {
            Image:'https://i.pinimg.com/736x/b5/1b/1f/b51b1f7789d774fe12c7d1c77e5d62e0.jpg',
        },
    ]

    let a=Math.round(Math.random()*arr.length);

    document.getElementById("b").innerHTML=`<img src="${arr[a].Image}" style="height:350px; width:350px; border-radius: 5px;" >`
}