let inventory = [
    {
        id: 1,
        name: "Sữa chua phô mai",
        price: 10000,
        type: "yogurt",
    },
    {
        id: 2,
        name: "Sữa chua trái cây",
        price: 13000,
        type: "yogurt",
    },
    {
        id: 3,
        name: "Rau câu flan dừa",
        price: 12000,
        type: "jelly",
    },
    {
        id: 4,
        name: "Rau câu truyền thống",
        price: 11000,
        type: "jelly",
    },
    {
        id: 5,
        name: "Bánh flan",
        price: 15000,
        type: "pudding",
    },
    {
        id: 6,
        name: "Tàu hũ Singapore",
        price: 50000,
        type: "tofu",
    },
    {
        id: 7,
        name: "Sữa chua túi",
        price: 5000,
        type: "yogurt",
    },
    {
        id: 8,
        name: "Sữa bắp",
        price: 14000,
        type: "milk",
    },
    {
        id: 9,
        name: "Sữa đậu đỏ",
        price: 14000,
        type: "milk",
      },
];

// create list of products
const products = document.getElementById('products')
for (let i = 0; i < inventory.length; i++) {
    const newDiv = document.createElement('div')
    newDiv.className = 'menu-items'

    const img = document.createElement('img')
    img.src = './imgs/dau.jpg'

    const title = document.createElement('h2')
    title.textContent = inventory[i].name
    title.classList = 'title'

    const price = document.createElement('p')
    price.innerHTML = inventory[i].price
    price.classList = 'price'

    const foodType = document.createElement('p')
    foodType.innerHTML = inventory[i].type
    foodType.classList = 'food-type'
    foodType.style.display = 'none'

    newDiv.appendChild(img)
    newDiv.appendChild(title)
    newDiv.appendChild(price)
    newDiv.appendChild(foodType)

    products.appendChild(newDiv)
}

function hideEle(ele) {
    ele.style.display = 'none'
}

function showEle(ele) {
    ele.style.removeProperty('display')
}

const myFilter = document.getElementsByClassName('filter')
for (i = 0; i < myFilter.length; i++) {
    myFilter[i].addEventListener('click', function() {
        for (e = 0; e < myFilter.length; e++) {
            myFilter[e].classList.remove('active')
        }
        this.classList.add('active')
        })
    }
        
function filterSelection(myType) {
    const itemsList = document.getElementsByClassName('menu-items')
    const myItemList = Array.from(itemsList)
    myItemList.map(hideEle)
    
    if (myType == 'all') {
        myItemList.map(showEle)
    }
    else {
        for (i = 0; i < myItemList.length; i++) {
            if (myItemList[i].lastChild.innerHTML == myType) {
                showEle(myItemList[i])
            }
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
