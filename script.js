const contentA = document.querySelector(".contentA")
const contentB = document.querySelector(".contentB")
const contentextra = document.querySelector(".contentextra")

contentA.addEventListener("click", function() {
    contentA.style.display = "none"
    contentB.style.display = "none"
    contentextra.style.display = "block"
})

contentextra.addEventListener("click", function() {
    contentA.style.display = "block"
    contentB.style.display = "block"
    contentextra.style.display = "none"
})