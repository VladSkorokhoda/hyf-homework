/*--------------------------------JS3Week3-----------------Homework--------*/
console.log("hi");
/*--------------------Paint a circle to a canvas element----*/


var elem = document.getElementById('myCanvas');
if (elem && elem.getContext) {
	var context = elem.getContext('2d');
	if (context) {
	context.fillRect(0, 0, 150, 100);
	}
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();


	var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			ctx.beginPath();
			ctx.arc(100, 75, 50, 0, 2 * Math.PI);
			ctx.stroke();


			var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
// var box_Height = 50;
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
context.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2 );
context.fill();

var centerY = 25;
var radius = 10;
var circle_Count = 3;
var distance_Between = canvas.width / (circle_Count+1);

for(var i=0;i<circle_Count;i++){
   context.beginPath();
   context.arc(distance_Between * (i+1), centerY, radius, 0, 2 * Math.PI, true);
   context.fillStyle = 'yellow';
   context.lineWidth = 1;
   context.strokeStyle = '#000000';
   context.fill();
   context.stroke();
   context.closePath();
}

context.texAlign = 'center';
context.font = '20px Georgia';
context.fillText("JS3Week3", canvas.width / 2, canvas.height / 2);


/*-----------------2-------------------*/

let myCanvas1 = document.getElementById('myCanvas1');
myCanvas1.setAttribute('width', 400);
myCanvas1.setAttribute('heigt', 400);

class Circle {
	constructor(x, y, r, startAngle, endAngle, fillColor) {
		this.x = x
		this.y = y
		this.r = r
		this.startAngle = startAngle
		this.endAngle = endAngle
		this.fillColor = fillColor
	}
	draw() {
		let context1 = myCanvas1.getContext("2d");
		context.beginPath();
		let circle1 = context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
		context1.lineWidth=10;
		context1.strokeStyle = this.strokeColor
		context1.fillStyle = this.fillColor
		context1.fill();
		context1.stroke();
	}
}

const c1 = new Circle(100, 100, 50, 0, 2 * Math.PI, "#001525",);
const c2 = new Circle(150, 100, 50, 0, 2 * Math.PI, "#112244");
const c3 = new Circle(200, 100, 50, 0, 2 * Math.PI, "#698532");

setInterval(() => {
	c1.draw();
	c2.draw();
	c3.draw();
}, 4000);
/*------------------- -*/
const canvas = document.querySelector('#myCanvas2');
      canvas.setAttribute('height',400)
      canvas.setAttribute('width',400)
      const myContext = canvas.getContext('2d');

class Circle1 {
	constructor(x, y, r, startAngle, endAngle, fillColor) {
		this.x = x
		this.y = y
		this.r = r
		this.startAngle = startAngle
		this.endAngle = endAngle
		this.fillColor = fillColor
	}
	draw() {
		const randomColor = "#"+ Math.floor(Mathrandom() * 13131313).toString(13);
		canvas.style.background = randomColor
		myContext.beginPath();
		myContext.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
		myContext.stroke();
		myContext.fillStyle =this.fillColor;
		myContext.fill();
	}
}
const c4 = new Circle2(100, 100, 30, 0, 2 * Math.PI, "#001525");
c4.draw();
const c5 = new Circle2(100, 100, 30, 0, 2 * Math.PI, "#112244");
c5.draw();
const c6 = new Circle2(120, 110, 50, 0, 2 * Math.PI, "#698532");
c6.draw();

setInterval(() => {
	const xRandom = Math.floor(Math.random() * 400);
	const yRandom = Math.floor(Math.random() * 400);
	const rRandom = Math.floor((Math.random() * 60) +30);
	const randomColor = "#" + Math.floor(Math.random() * 13131313).toString(13);
	const c7 = new Circle2(xRandom, yRandom, rRandom, 0, 2 * Math.PI, randomColor);
	c7.draw();
}, 4000);

document.getElementById("myCanvas2").addEventListener("mousemove", 
   function(event){
      console.log(event);
      var x = event.clientX;
      var y = event.clientY;
const rRandom = 50;
const randomColor ="#608077";
const c8 = new Circle2(x, y, rRandom, 0, 2 * Math.PI, randomColor);
c8.draw
	});

/*---------------------Getting into promises------------*/
async function getAllApiTogether() {
try {
   const apis = await Promise.all([
      fetch('https://api.github.com/search/repositories?q=user:benna100'),
      
   ]);

   const promiseJson = apis.map((api) => api.json());
   const result = await Promise.all(promiseJson);
   result.map((val) => {
      val.items.map((val1) => {
      console.log(val1);
      console.log(val1.owner.login);

      const promiseSection = document.querySelector('#promiseSection');
      const promiseSectionUL = document.createElement('ul');

      const owner = document.createElement('h1')
      owner.innerHTML = `Owner: ${val1.owner.login}`;

      const RepoName = document.createElement('li')
      RepoName.innerHTML = ` Repo Name: ${val1.full_name}`;

      const URL = document.createElement('li')
      URL.innerHTML = ` Repo Name: ${val1.owner.url}`;


      promiseSectionUL.appendChild(owner)
      promiseSectionUL.appendChild(RepoName)
      promiseSectionUL.appendChild(URL)

      promiseSection.appendChild(promiseSectionUL)
      });
   });
	} catch (error) {
   console.log(error);
	}
}

const repoInfo = geApi();
console.log(repoInfo);
/*-------------------Shopping cart using Classes------*/

const productsDiv = document.querySelector(".products");
const h5 = document.querySelector(".userName");
const an = document.createElement("an");
class Product {
constructor(name, price) {
   this.name = name;
   this.price = price;
}
convertToCurrency(currency) {
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json()).then((data) => {
            const rateObj = data.rates;
            const objArray = Object.entries(rateObj);
            objArray.map((obj) => {
               if (currency.toUpperCase().includes(obj[0])) {
                    console.log(this.name + ": " + this.price * obj[1] + " " + obj[0]);
               }
            })
      })
	}
}
class ShoppingCart {
constructor() {
   this.products = [];
}

addProduct(product) {
   this.products.push(product);
	console.log(this.products)
}

removeProduct(product) {
   const index = this.products.indexOf(product);
	if(index > -1) {
		this.products.splice(index, 1);
	}
}

searchProduct(productName) {
   const searchedProducts = [];
      for (const product of this.products) {
            if (product.name === productName) {
               searchedProducts.push(productName);
            }
}
console.log(searchedProducts);
}

getTotal() {
   let total = 0;
	for(const product of this.products) {
            total += product.price;
      }
	
      console.log("total price : " + total);
      return total;
	}

renderProducts() {
	this.products.map((product) => {

            const nameOfProduct = product.name;
            const priceOfProduct = product.price;
            const ul = document.createElement("ul");
            ul.innerHTML = ` <li>${nameOfProduct} : ${priceOfProduct} .</li>`;
            productsDiv.appendChild(ul);
            p.innerHTML = `Total price is :${shoppingCart.getTotal()}.`;
            productsDiv.appendChild(p);
      });
      const input = document.querySelector("#searchProduct");
      const clickSearch = document.querySelector(".searchButton");

      clickSearch.addEventListener("click", () => {
            productsDiv.innerHTML = "";
            this.products.map((products) => products).filter((pro) => pro.name.includes(input.value)).map((pro) => {
               const myInfoP = document.createElement("an");
               myInfoP.innerHTML = `${pro.name}: ${pro.price}.`;
               productsDiv.appendChild(myInfoP);
            });

      });
}

}

getUser(user) { 
   return fetch(`https://jsonplaceholder.typicode.com/users/${user}`) 
            .then((data) => data.json())
            .then((response) => {
               h2.innerHTML = "User Name: " + response.name + " .  " + "User ID: " + response.id;
               productsDiv.appendChild(h2);
				
            });
   };

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 4000);
const tv = new Product("iphone", 2000);4
const laptop = new Product("lenovo", 5000);
const mobil = new Product("car", 3000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(tiphone);
shoppingCart.addProduct(llenovo);
shoppingCart.addProduct(car);
shoppingCart.removeProduct(car);
shoppingCart.removeProduct(iphone);
shoppingCart.getTotal();
shoppingCart.searchProduct("iphone");
shoppingCart.renderProducts();
shoppingCart.getUser(2);
