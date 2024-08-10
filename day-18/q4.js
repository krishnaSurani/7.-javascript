function addtoarray(a, b) {
    console.log("Befor add number : ");
    console.log(a);

    a[3]=b
    console.log("After add number : ");

    console.log(a);
}

addtoarray([1, 2, 3], 4)