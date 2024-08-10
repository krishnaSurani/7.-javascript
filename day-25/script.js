

do{
    quote();
}
while(false);



function quote()
{

let arr=[
    {
        Image:'https://cdn.britannica.com/17/76417-050-6158F992/Bernard-Baruch-1919.jpg',
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        person:"- Bernard M. Baruch"
        
    },
    {
        Image:'https://cdn.britannica.com/82/138382-050-2E8FCB26/Virginia-Woolf.jpg',
        quote:"'You cannot find peace by avoiding life'",
        person:" – Virginia Woolf"
    },
    {
        Image:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-3293557.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
        quote:"'Don't let your happiness depend on something you may lose.'",
        person:"- C.S. Lewis"
    },
    {
        Image:'https://m.media-amazon.com/images/I/715p8zAa6ZL._AC_UF894,1000_QL80_.jpg',
        quote:"“The future depends on what we do in the present.”",
        person:"- Mahatma Gandhi"
    },
    {
        Image:'https://upload.wikimedia.org/wikipedia/commons/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg',
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        person:"- Dr. Seuss"
    },
    {
        Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBe2XASlPrGqVkpXLiRwEWUsEudvDkdFvQXw&s',
        quote:"“The way to get started is to quit talking and begin doing”",
        person:"- Walt Disney"
    },
    {
        Image:'https://cafedissensusblog.com/wp-content/uploads/2017/10/swami-vivekananda.jpg?w=640',
        quote:"“We are what our thoughts have made us; so take care about what you think.”",
        person:"- Swami vivekananda"
    },
    {
        Image:'https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg',
        quote:"“If you want to shine like a sun, first burn like a sun”",
        person:"- APJ Abdul Kalam"
    },
    {
        Image:'https://m.media-amazon.com/images/I/71ZxDcW0j0L._AC_UF1000,1000_QL80_.jpg',
        quote:"“You have the right to work, but never to the fruit of the work.”",
        person:"- Srimad Bhagavad Gita"
    },
    {
        Image:'https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg',
        quote:" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        person:"- Albert Einstein"
    }
]

let a=Math.random()*arr.length;
let b=Math.round(a);

    document.getElementById("ans").innerHTML=`<img src="${arr[b].Image}" style="height:180px; width:180px; border-radius: 5px;" > <h3>${arr[b].quote}</h3> <p class="person">${arr[b].person}</p> `
    


}