const samplePrice = document.querySelectorAll(".discount-num");
const samplePricePercents = document.querySelectorAll(".price-percent");
console.log(samplePrice);
console.log(samplePricePercents);

function showDiscountPrice() {
  for (const samplePricePercent of samplePricePercents) {
    samplePricePercent.style.display = "block";
  }
}

function hideDiscountPrice() {
  for (const samplePricePercent of samplePricePercents) {
    samplePricePercent.style.display = "none";
  }
}

// showDiscountPrice();
// hideDiscountPrice();

// samplePrice.addEventListener("mouseenter", showDiscountPrice);
// samplePrice.addEventListener("mouseleave", hideDiscountPrice);
