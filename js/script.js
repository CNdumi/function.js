function calculateInclusivePrice(exclusivePrice, taxRate) {
    const inclusivePrice = exclusivePrice + (exclusivePrice * (taxRate / 100));
    return inclusivePrice;
  }
  
  const price = calculateInclusivePrice(30000, 16);
  console.log("Inclusive Price:", price);
  
  