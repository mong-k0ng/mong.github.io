const main = document.querySelector(".first-main");

const loaddata = async () => {
    const res = await fetch("image.json");
    const data = await res.json();

    let index = 0;
    
    const img = document.createElement("img");
    img.src = data[index].link;
    img.style.opacity = "1";

    main.appendChild(img);

    setInterval(() => {
        img.style.opacity = "0";
        index = (index + 1) % data.length;

        setTimeout(() => {
            img.src = data[index].link;
            img.style.opacity = "1";
        }, 200);
        
    }, 5000);
    
}

loaddata();