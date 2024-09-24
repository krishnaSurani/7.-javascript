

function dog() {
    {
            fetch(`https://dog.ceo/api/breeds/image/random `)
                    .then(res => res.json())
                    .then((res) => {

                            console.log(res);

                            document.getElementById("img").innerHTML = `<img src="${res.message}" class="h-full w-full">`

                    })
                    .catch(er => console.log(er))
    }
}
dog()