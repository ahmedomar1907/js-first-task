var allProduct=document.querySelectorAll(".item h3")
var content=document.querySelector("#content")
var btn=document.querySelector("#btn")
var show=document.querySelector("#show")
var totalPrice=0

allProduct.forEach(function(item1){
    item1.onclick=function(){
        totalPrice += Number(item1.getAttribute("price"))
        content.innerHTML +=item1.textContent + " + "

        if(content.innerHTML!=""){
            btn.style.display="block";
        }
    }
})
btn.onclick = function(){
    show.innerHTML="total price is : "  +  totalPrice + " L.E"

}