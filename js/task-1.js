// task 1
const array = document.querySelectorAll("ul#categories .item")

let total = 0

array.forEach(() => {
    total ++;
});

console.log("Number of categories:",total)

// task 2


array.forEach((element) => {
    console.log("Categories:", element.querySelector("h2").textContent);
    const ulInLi = element.querySelectorAll("ul li")
    console.log("Elements:",ulInLi.length)
    
})