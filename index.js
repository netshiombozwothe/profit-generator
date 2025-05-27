let productName = document.getElementById("product-name")

const productSold = document.getElementById("products-sold")
const costPrice = document.getElementById("cost-price")
const sellingPrice = document.getElementById("selling-price")

let getProfit = document.getElementById("get-profit")
const displayProfit = document.getElementById("display-profit")
const listItems = document.getElementById("list-items")


getProfit.addEventListener("click",function(){
calculateProfit()
displayAll()
clearInputs()
})

function calculateProfit(){
    let profit = Number(sellingPrice.value) - Number(costPrice.value)
    displayProfit.textContent = profit.toFixed(0)
}
function displayAll(){
    listItems.innerHTML = `
    <li>Product Name: ${productName.value}</li>
    <li>Quantity: ${Number(productSold.value)} items</li>
    <li>Price From Store: R${Number(costPrice.value)}</li>
    <li>Selling Price: R${Number(sellingPrice.value)}</li>
    <li>Profit for each ${productName.value}: R${displayProfit.textContent}</li>
    <li>Total Profit: R${displayProfit.textContent * productSold.value}
    </li>`
}
function clearInputs(){
    productName.value = ""
    productSold = ""
    costPrice.value =""
    sellingPrice.value =""
    
}