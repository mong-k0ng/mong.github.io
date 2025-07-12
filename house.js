const buttons = document.querySelectorAll(".house-btn button");
const left = document.querySelector(".btn-left");
const right = document.querySelector(".btn-right");
const number = document.querySelector(".number");
const image = document.querySelector(".house-img");

const loadData = async()=>{
    const res =  await fetch("house.json");
    const data =  await res.json();

    let Index = 0;

    const img = document.createElement("img");
    img.src = data[Index].link;
    image.appendChild(img);

    number.textContent = Index + 1;

    
    right.addEventListener("click", ()=>{
        Index++;
        if (Index >= data.length) Index = 0;
        number.textContent = Index + 1;
    });

    left.addEventListener("click", ()=>{
        Index--;
        if (Index < 0) Index = data.length - 1;
        number.textContent = Index + 1 ;
    });

    buttons.forEach((button) =>{
        button.addEventListener("click" , ()=>{
            img.innerHTML = "";
            img.src = data[Index].link;
        });
    });

}

loadData();
