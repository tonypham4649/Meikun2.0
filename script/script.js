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

// inventory.sort(function(a, b) {
// if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
// if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
// return 0}
// )


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
  
  
//   const sortEle = document.getElementById('sort-by')
//   const sortByName = function(a, b) {
//     let nameA = a.getElementsByClassName("title")[0].innerText.toLowerCase()
//     let nameB = b.getElementsByClassName("title")[0].innerText.toLowerCase()
    
//     if (nameA < nameB) return -1
//     if (nameA > nameB) return 1
//     return 0
//   }
  
//   const sortByPrice = function(a, b) {
//     let priceA = Number(a.getElementsByClassName("price")[0].innerText)
//     let priceB = Number(b.getElementsByClassName("price")[0].innerText)
    
//     if (priceA < priceB) return -1
//     if (priceA > priceB) return 1
//     return 0
//   }
  
//   sortEle.addEventListener('change', function() {
//     const value = sortEle.value
//     var list = document.getElementsByClassName('item')
//     list = Array.from(list)
  
//     if (value == 'sort by name') {
//       list.sort(sortByName)
//     }
//     if (value == 'sort by price') {
//       list.sort(sortByPrice)
//     }
  
//     for (let i = 0; i < list.length; i++) {
//       list[i].parentElement.appendChild(list[i])
//     }
//   })
  
//   const color = document.getElementsByClassName('color')
//   const header = document.getElementsByTagName('header')[0]
  
//   for (let i = 0; i < color.length; i++) {
//     color[i].addEventListener('click', function() {
//       header.style.backgroundImage = 'none'
//       header.setAttribute('id', color[i].id)
//     })
  
//     if (color[i].id == 'gradient') {
//       color[i].addEventListener('click', function() {
//         header.style.backgroundImage = 'linear-gradient(to right, #fcbf16, #992154)'
//       })
//     }
//   }
  
//   const filter = document.getElementById('apply-price-filter')
//   const itemList = document.getElementsByClassName('item')
  
//   filter.addEventListener('click', function() {
//     const titleList = document.getElementsByClassName('title')
//     const priceList = document.getElementsByClassName('price')
    
//     const search = document.getElementById('search').value.toLowerCase()
    
//     const minPrice = Number(document.getElementById('min-price').value)
//     const maxPrice = Number(document.getElementById('max-price').value)
   
  
//     if (search != '') {
//       for (let i = 0; i < titleList.length; i++) {
//         if (!titleList[i].innerHTML.toLowerCase().includes(search)) {
//           titleList[i].parentElement.style.display = 'none'
//         }
//       }
//     }
//     else {
//       for (let i = 0; i < titleList.length; i++) {
//         titleList[i].parentElement.style.removeProperty('display')
//       }
//     }
     
//     if (minPrice == 0 && maxPrice == 0) {
//       for (let i = 0; i < priceList.length; i++) {
//         priceList[i].parentElement.style.removeProperty('display')
//       }
//     }
//     else if (minPrice <= maxPrice && minPrice >= 0) {
//       for (let i = 0; i < priceList.length; i++) {
//         let bookPrice = Number(priceList[i].innerHTML)
//         if (bookPrice < minPrice || bookPrice > maxPrice) {
//           priceList[i].parentElement.style.display = 'none'
//         }
//       }
//     }  
  
//     else {
//               proEle.parentElement.style.display = 'none'}
//             })
//         }
//       })
//     }
//   })
  