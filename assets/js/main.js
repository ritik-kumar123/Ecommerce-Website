let heroSection = document.querySelector(".herosection")
let blogs= document.querySelector(".blogs");
let shops = document.querySelector(".shops")
let girlsShops = document.querySelector(".girls-shop")
let footer= document.querySelector(".footer")
let body= document.querySelector("body");
let contact= document.querySelector(".contact-form");
let shopsData = [
    {selector:".box-1", image:"/assets/images/man.png", price:"14", count: 0},
    {selector:".box-2", image:"/assets/images/man3.png", price:"32",count: 0},
    {selector:".box-3", image:"/assets/images/man4.png", price:"11",count: 0},
    {selector:".box-4", image:"/assets/images/women1.png", price:"15",count: 0},
    {selector:".box-5", image:"/assets/images/women2.png", price:"9",count: 0},
    {selector:".box-6", image:"/assets/images/women3.png", price:"13",count: 0}
]

function handleClick(image, Price, count) {
    let existingMaindiv = document.querySelector(".maindiv");
        if (existingMaindiv) {
            existingMaindiv.remove();
        }
        
        count++;
        heroSection.style.display = "none";
        shops.style.display = "none";
        girlsShops.style.display = "none";
        blogs.style.display = "none";
        footer.style.display = "none";
        contact.style.display = "none";
    
    let maindiv = document.createElement("div");
        maindiv.classList.add("maindiv");
        maindiv.style.height = "100%";
        maindiv.style.width = "100%";
        maindiv.style.display = "flex";
        body.appendChild(maindiv);
    
    let divleft = document.createElement("div");
        maindiv.appendChild(divleft);
        divleft.style.height = "630px";
        divleft.style.width = "50%";
        divleft.style.paddingTop = "30px";
        divleft.style.marginTop = "100px";
        divleft.style.marginLeft = "30px";
    
    let divleftImage = document.createElement("div");
        divleftImage.style.height = "550px";
        divleftImage.style.position = "fixed";
        divleftImage.style.width = "450px";
        divleftImage.style.marginBottom = "50px";
        divleftImage.style.marginLeft = "150px";
        divleftImage.style.backgroundImage = `url('${image}')`;
        divleftImage.style.backgroundColor = "gray";
        divleftImage.style.backgroundSize = "cover";
        divleftImage.style.borderRadius = "40px";
        divleft.appendChild(divleftImage);

    let divright = document.createElement("div");
        divright.style.height = "630px";
        divright.style.width = "50%";
        divright.style.marginTop = "100px";
        maindiv.appendChild(divright);

    let divRightText = document.createElement("div");
        divright.appendChild(divRightText);
        divRightText.style.height = "600px";
        divRightText.style.width = "500px";
        divRightText.style.marginTop = "20px";
        divRightText.style.position = "fixed";

    let h1 = document.createElement("h1");
        divRightText.appendChild(h1);
        h1.style.color = "white";
        h1.innerText = "Shoply Offer: Trending Shop Now";
        h1.style.fontSize = "40px";
        h1.style.fontWeight = "700";
        h1.style.paddingTop = "20px";

    let h2 = document.createElement("h2");
        divRightText.appendChild(h2);
        h2.style.fontStyle = "normal";
        h2.style.fontSize = "30px";
        h2.innerText = "Special Price";
        h2.style.paddingTop = "10px";

    let h3 = document.createElement("h3");
        divRightText.appendChild(h3);
        h3.style.fontStyle = "normal";
        h3.style.fontSize = "30px";
        h3.innerText = `${'$' + Price}`;
        h3.style.paddingTop = "10px";

    let p = document.createElement("p");
        divRightText.appendChild(p);
        p.style.fontStyle = "normal";
        p.style.fontSize = "20px";
        p.style.color = "white"; // Ensure text is readable on black background
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ea nemo sed neque accusantium ut nam vel repellat ab, tenetur dicta optio eaque quos quam minus consectetur, molestias sunt quas, dolore ipsa animi provident eum! Totam neque cupiditate iste.";
        p.style.paddingTop = "15px";

    let button = document.createElement("button");
        divRightText.appendChild(button);
        button.innerText = "Back";
        button.style.height = "50px";
        button.style.width = "150px";
        button.style.border = "none";
        button.classList.add("btn-back");
        button.style.backgroundColor = "sienna";
        button.style.marginTop = "20px";
        button.style.borderRadius = "20px";
        button.style.color = "white";
        button.style.fontSize = "20px";
        button.style.transition = "1s all";

    button.addEventListener("click", () => 
        {
            maindiv.remove();
            footer.style.display = "block";
            shops.style.display = "block";
            girlsShops.style.display = "block";
            blogs.style.display = "block";
            contact.style.display = "block";
            heroSection.style.display = "flex";
        });

    let button2 = document.createElement("button");
        divRightText.appendChild(button2);
        button2.innerText = "Add To Cart";
        button2.style.height = "50px";
        button2.style.width = "150px";
        button2.style.border = "none";
        button2.classList.add("btn-back");
        button2.style.backgroundColor = "sienna";
        button2.style.marginTop = "20px";
        button2.style.marginLeft = "100px";
        button2.style.borderRadius = "20px";
        button2.style.color = "white";
        button2.style.fontSize = "20px";
        button2.style.transition = "1s all";

        button2.addEventListener("click", () => {
    let cartdiv = document.querySelector(".cartdiv");

        if (!cartdiv) {
            cartdiv = document.createElement("div");
            cartdiv.classList.add("cartdiv");
            cartdiv.style.position = "fixed";
            cartdiv.style.top = "0";
            cartdiv.style.left = "0";
            cartdiv.style.height = "100%";
            cartdiv.style.width = "100%";
            cartdiv.style.backgroundColor = "rgb(0, 0, 0)"; 
            cartdiv.style.zIndex = "1000";
            cartdiv.style.display = "flex";
            cartdiv.style.flexDirection = "column";
            cartdiv.style.overflowY = "auto";
            body.appendChild(cartdiv);

            let headingdiv = document.createElement("div");
            headingdiv.style.display = "flex";
            headingdiv.style.justifyContent = "space-around";
            headingdiv.style.alignItems = "center";
            headingdiv.style.margin = "20px 0";
            headingdiv.style.padding = "10px";
            headingdiv.style.backgroundColor = "black";
            headingdiv.style.color = "white";
            headingdiv.style.fontSize = "25px";
            cartdiv.appendChild(headingdiv);

            let product = document.createElement("div");
            product.innerText = "Product";
            headingdiv.appendChild(product);

            let productprice = document.createElement("div");
            productprice.innerText = "Price";
            headingdiv.appendChild(productprice);

            let quantity = document.createElement("div");
            quantity.innerText = "Quantity";
            headingdiv.appendChild(quantity);

            let total = document.createElement("div");
            total.innerText = "Total";
            headingdiv.appendChild(total);

            let remove = document.createElement("div");
            remove.innerText = "Remove";
            headingdiv.appendChild(remove);

            let buttonback = document.createElement("button");
            cartdiv.appendChild(buttonback);
            buttonback.innerText = "Back";
            buttonback.style.height = "60px"; 
            buttonback.style.width = "180px"; 
            buttonback.style.border = "none";
            buttonback.classList.add("btn-back");
            buttonback.style.backgroundColor = "sienna";
            buttonback.style.margin = "20px";
            buttonback.style.borderRadius = "20px";
            buttonback.style.color = "white";
            buttonback.style.fontSize = "25px"; 
            buttonback.style.transition = "1s all";

            buttonback.addEventListener("click", () => {
                cartdiv.remove();
                maindiv.remove();
                footer.style.display = "block";
                shops.style.display = "block";
                girlsShops.style.display = "block";
                blogs.style.display = "block";
                heroSection.style.display = "flex";
                nav.style.display = "flex";
            });
        }

        // Add a new item to the cart
        let cartItem = document.createElement("div");
        cartItem.style.display = "flex";
        cartItem.style.justifyContent = "space-around";
        cartItem.style.alignItems = "center";
        cartItem.style.padding = "15px"; 
        cartItem.style.margin = "10px 0";
        cartItem.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 
        cartItem.style.borderRadius = "15px"; 
        cartdiv.appendChild(cartItem);

        let divImage = document.createElement("div");
        divImage.style.height = "80px"; 
        divImage.style.width = "80px";
        divImage.style.backgroundImage = `url('${image}')`;
        divImage.style.backgroundSize = "cover";
        divImage.style.backgroundColor = "gray";
        divImage.style.borderRadius = "10px";
        cartItem.appendChild(divImage);

        let productpriceItem = document.createElement("div");
        productpriceItem.innerText = `${'$' + Price}`;
        productpriceItem.style.fontSize = "24px"; 
        productpriceItem.style.color = "white"; 
        cartItem.appendChild(productpriceItem);

        let quantityItem = document.createElement("div");
        quantityItem.style.display = "flex";
        quantityItem.style.alignItems = "center";

        let decreaseButton = document.createElement("button");
        decreaseButton.innerText = "-";
        decreaseButton.style.border = "none";
        decreaseButton.style.backgroundColor = "sienna";
        decreaseButton.style.color = "white";
        decreaseButton.style.borderRadius = "50%";
        decreaseButton.style.marginRight = "10px";
        decreaseButton.style.width = "30px";
        decreaseButton.style.height = "30px";
        quantityItem.appendChild(decreaseButton);

        let quantityText = document.createElement("span");
        quantityText.innerText = `${count}`;
        quantityText.style.margin = "0 10px";
        quantityText.style.fontSize = "20px"; // Increase font size
        quantityText.style.color = "white"; // Font color white
        quantityItem.appendChild(quantityText);

        let increaseButton = document.createElement("button");
        increaseButton.innerText = "+";
        increaseButton.style.border = "none";
        increaseButton.style.backgroundColor = "sienna";
        increaseButton.style.color = "white";
        increaseButton.style.borderRadius = "50%";
        increaseButton.style.marginLeft = "10px";
        increaseButton.style.width = "30px";
        increaseButton.style.height = "30px";
        quantityItem.appendChild(increaseButton);

        cartItem.appendChild(quantityItem);

        let totalItem = document.createElement("div");
        totalItem.innerText = `${'$' + (parseInt(Price) * count)}`;
        totalItem.style.fontSize = "24px"; 
        totalItem.style.color = "white";
        cartItem.appendChild(totalItem);

        let removeItem = document.createElement("button");
        removeItem.innerText = 'X';
        removeItem.style.height = "40px";
        removeItem.style.width = "40px";
        removeItem.style.border = "none";
        removeItem.style.backgroundColor = "red";
        removeItem.style.color = "white";
        removeItem.style.borderRadius = "50%";
        cartItem.appendChild(removeItem);

        removeItem.addEventListener("click", () => {
            cartItem.remove();
        });

        increaseButton.addEventListener("click", () => {
            count++;
            quantityText.innerText = count;
            totalItem.innerText = `${'$' + (parseInt(Price) * count)}`;
        });

        decreaseButton.addEventListener("click", () => {
            if (count > 1) {
                count--;
                quantityText.innerText = count;
                totalItem.innerText = `${'$' + (parseInt(Price) * count)}`;
            }
        });
    });
}

shopsData.forEach(shop => {
    let shopsBox = document.querySelector(shop.selector);
    if (shopsBox) {
        shopsBox.addEventListener("click", () => handleClick(shop.image, shop.price, shop.count));
    } else {
        console.error(`Element not found: ${shop.selector}`);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        document.querySelectorAll('a[href^="#"]').forEach(nav => {
            nav.style.color = "";
        });
        this.style.color = "sienna";
    });
});


let About = [
    {selector:".about-1"},
    {selector:".about-2"}
]

 function aboutbox() 
 {
    heroSection.style.display = "none";
    shops.style.display = "none";
    girlsShops.style.display = "none";
    blogs.style.display = "none";
    contact.style.display = "none";
    footer.style.display = "none";

    let aboutDiv = document.createElement("div");
    aboutDiv.style.marginTop = "100px";
    aboutDiv.style.height = "100vh";
    aboutDiv.style.width = "100%";
    aboutDiv.style.backgroundColor = "#f7f7f7";
    aboutDiv.style.padding = "20px";
    aboutDiv.style.display = "flex";
    aboutDiv.style.flexDirection = "column";
    aboutDiv.style.alignItems = "center";
    body.appendChild(aboutDiv);

    let aboutContent = `
        <div style="max-width: 800px; text-align: center; color: #333;">
            <h1 style="color: sienna; font-size: 40px; margin-bottom: 20px;">About Us</h1>
            <p style="font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
                Welcome to Shoply, your go-to destination for the latest trends and top-quality fashion.
                We are committed to providing our customers with exceptional service and a seamless shopping experience.
                Explore our curated collections and discover the perfect outfit for any occasion.
                Join us on our journey to make fashion accessible and enjoyable for everyone!
            </p>
            <h2 style="color: sienna; font-size: 30px; margin-bottom: 10px;">Our Mission</h2>
            <p style="font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
                Our mission is to bring you the best fashion from around the world at unbeatable prices.
                We believe that everyone deserves to look and feel their best, and we strive to make that possible
                with our wide range of products. From casual wear to formal attire, we have something for everyone.
            </p>
            <h2 style="color: sienna; font-size: 30px; margin-bottom: 10px;">Contact Us</h2>
            <p style="font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
                If you have any questions or need assistance, feel free to reach out to our customer service team.
                We are here to help you with anything you need.
            </p>
            <button id="about-back-btn" style="padding: 10px 20px; background-color: sienna; color: white; border: none; border-radius: 5px; font-size: 18px; cursor: pointer; margin-top: 20px;">Back</button>
        </div>
    `;
   

    aboutDiv.innerHTML = aboutContent;

    document.getElementById("about-back-btn").addEventListener("click", function() {
        aboutDiv.remove();
        footer.style.display = "block";
        shops.style.display = "block";
        girlsShops.style.display = "block";
        contact.style.display = "block";
        blogs.style.display = "block";
        heroSection.style.display = "flex";
    });
};

About.forEach(about=>{
     let abouttext = document.querySelector(about.selector);
    abouttext.addEventListener("click",()=>aboutbox(about.selector));
})
