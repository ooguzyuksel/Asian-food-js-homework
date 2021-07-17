const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: "Spicy rice cakes, serving with fish cake."
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: "Boiling vegetables, serving with special hot sauce"
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: "Black bean sauce noodle, serving with green onion "
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`
    },
  ];

// DOMs
const buttonDivDOM = document.querySelector(".buttons");
const centerDOM = document.querySelector(".section-center");

//Initializer
document.addEventListener("DOMContentLoaded",buttonsFunction);
document.addEventListener("DOMContentLoaded",allList);

//Button Names Array
let buttonNames = ["All","Korea","Japan","China"]

//Creating button on Interface
function buttonsFunction(){
buttonNames.forEach(buttonName => {

    let button = document.createElement("button");
    button.innerHTML = buttonName;
    button.classList.add(buttonName)
    button.classList.add("btn","btn-outline-dark","mx-1")
    buttonDivDOM.appendChild(button);
})}


// FILTERING AND MAPPING SECTION

//Get Button
document.addEventListener("DOMContentLoaded",getButtonFromDOM);

//Get buttons from DOM
function getButtonFromDOM(){
    let allButtonDOM = document.querySelector(".All")
    let koreaButtonDOM = document.querySelector(".Korea")
    let japanButtonDOM = document.querySelector(".Japan")
    let chinaButtonDOM = document.querySelector(".China")

    allButtonDOM.addEventListener("click",allList)
    koreaButtonDOM.addEventListener("click",koreaList)
    japanButtonDOM.addEventListener("click",japanList)
    chinaButtonDOM.addEventListener("click",chinaList)
}

//All List Function
function allList(){
    //Filtering
    let allFoods = menu.map(all => 
    `<div class="menu-items col-lg-6">
        <div><img src=${all.img}></div>
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${all.title}</h4>
                    <h4 class="price">${all.price}</h4>
                </div>
            <div class="menu-text">${all.desc}</div>
        </div>
    </div>`).join("");

    centerDOM.innerHTML = allFoods;

}
// Korea List Function
function koreaList(){
    //Filtering
    let koreaFoods = menu
    .filter(korea => korea.category === "Korea")
    .map(korea => 
    `<div class="menu-items col-lg-6">
        <div><img src=${korea.img}></div>
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${korea.title}</h4>
                    <h4 class="price">${korea.price}</h4>
                </div>
            <div class="menu-text">${korea.desc}</div>
        </div>
    </div>`).join("");

    centerDOM.innerHTML = koreaFoods;

}

//Japan List Function
function japanList(){
    //Filtering
    let japanFoods = menu
    .filter(japan => japan.category === "Japan")
    .map(japan => 
    `<div class="menu-items col-lg-6">
        <div><img src=${japan.img}></div>
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${japan.title}</h4>
                    <h4 class="price">${japan.price}</h4>
                </div>
            <div class="menu-text">${japan.desc}</div>
        </div>
    </div>`).join("");

    centerDOM.innerHTML = japanFoods;

}

//China List Function
function chinaList(){
    //Filtering
    let chinaFoods = menu
    .filter(china => china.category === "China")
    .map(china => 
    `<div class="menu-items col-lg-6">
        <div><img src=${china.img}></div>
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${china.title}</h4>
                    <h4 class="price">${china.price}</h4>
                </div>
            <div class="menu-text">${china.desc}</div>
        </div>
    </div>`).join("");

    centerDOM.innerHTML = chinaFoods;

}