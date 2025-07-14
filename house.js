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

    Index = 0;
    
    
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
            img.style.opacity ="0";
            img.style.transition ="opacity 0.2s ease";
                setTimeout(() =>{
                    img.src = data[Index].link;
                    img.style.opacity ="1";
                },200)
        });
    });

    setInterval(()=>{
        img.style.opacity ="0";
        Index = (Index + 1) % data.length;
        number.textContent = Index + 1 ;
        img.src = data[Index].link;
        setTimeout(()=>{
            img.style.transition ="opacity 0.5s ease";
            img.style.opacity ="1";
        },200)
    },10000);

    setInterval(()=>{
        right.style.transform ="translateX(0.7vw)";
        left.style.transform ="translateX(-0.7vw)";
        setTimeout(()=>{
            right.style.transform ="translateX(0vw)";
            left.style.transform ="translateX(0vw)";
        },1000)
    },1500);
}

loadData();
