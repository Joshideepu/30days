function calculateMaxChocolates(totalMoney, costPerChocolate) {
  let initialChocolates = Math.floor(totalMoney / costPerChocolate);
  let totalChocolates = initialChocolates;
  let wrappers = initialChocolates;
  while (wrappers >= 3) {
    const exchangedChocolates = Math.floor(wrappers / 3);
    totalChocolates += exchangedChocolates;
    wrappers = exchangedChocolates + (wrappers % 3);
  }
  return totalChocolates;
}
  
const totalMoney = 4;
const costPerChocolate = 1;
  
const maxChocolates = calculateMaxChocolates(totalMoney, costPerChocolate);
console.log("Maximum number of chocolates Ashi can eat:", maxChocolates);