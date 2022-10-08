document.getElementById('pluse-button').addEventListener('click', function(){
    const valueFeild = document.getElementById('valuefeild');
    const valueNumber = valueFeild.value;
    const valueString = parseInt(valueNumber);

    const valuePluse = valueString + 1;

    valueFeild.value = valuePluse;

    const getProduct = document.getElementById('produtAmount');
    const getProductNuber = getProduct.innerText;
    const produtAmountTotal = parseFloat(getProductNuber);
    
    const produtAmountIncres = valuePluse * 1219;

    getProduct.innerText = produtAmountIncres;

});

document.getElementById('minus-button').addEventListener('click', function(){
    const minusButton = document.getElementById('valuefeild');
    const minusNumber = minusButton.value;

    const minusStinger = parseInt(minusNumber);
    const minusTotal = minusStinger - 1;
    minusButton.value = minusTotal;

    const getProductsecond = document.getElementById('produtAmount');
    const getProductNubersecond = getProductsecond.innerText;
    const produtAmountTotalsecond = parseFloat(getProductNubersecond);
    
    const produtAmountIncresminus = minusTotal * 1219;

    getProductsecond.innerText = produtAmountIncresminus;
});
document.getElementById('pluse-button-second').addEventListener('click', function(){
    const valueFeildsecondproduct = document.getElementById('valuefeildSecond');
    const valueNumbersecondproduct = valueFeildsecondproduct.value;
    const valueString = parseInt(valueNumbersecondproduct);

    const valuePluse = valueString + 1;

    valueFeildsecondproduct.value = valuePluse;

    const getProduct = document.getElementById('produtAmountSecond');
    const getProductNuber = getProduct.innerText;
    const produtAmountTotal = parseFloat(getProductNuber);
    
    const produtAmountIncressecound = valuePluse * 59;

    getProduct.innerText = produtAmountIncressecound;

});

document.getElementById('minus-button-second').addEventListener('click', function(){
    const minusButtonsecond = document.getElementById('valuefeildSecond');
    const minusNumbersecond = minusButtonsecond.value;

    const minusStingersecond = parseInt(minusNumbersecond);
    const minusTotalsecond = minusStingersecond - 1;
    minusButtonsecond.value = minusTotalsecond;

    const getProductsecond = document.getElementById('produtAmountSecond');
    const getProductNubersecond = getProductsecond.innerText;
    const produtAmountTotalsecond = parseFloat(getProductNubersecond);
    
    const produtAmountIncressecondminus = minusTotalsecond * 59;

    getProductsecond.innerText = produtAmountIncressecondminus;
});




document.getElementById('pluse-button').addEventListener('click',function(){

    const getsubtotalforonenonproduct = document.getElementById('produtAmount');
    const getsubtotalforonenonproductstring = getsubtotalforonenonproduct.innerText;
    const etsubtotalforonenonproductammount = parseFloat(getsubtotalforonenonproductstring)
    

    const getsubtotalforonenonproductsecond = document.getElementById('produtAmountSecond');
    const getsubtotalforonenonproductstringsecond = getsubtotalforonenonproductsecond.innerText;
    const etsubtotalforonenonproductammountsecond = parseFloat(getsubtotalforonenonproductstringsecond)

    const subtotal = document.getElementById('subtotal');
    const subtotalstring = subtotal.innerText;
    const subtotalstringconvert = parseFloat(subtotalstring)

    const totalAmountToSubtotal = etsubtotalforonenonproductammount + etsubtotalforonenonproductammountsecond;

    subtotal.innerText = totalAmountToSubtotal;

    const subtotalfortax = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax');
    const taxString = tax.innerText;
    const taxStringConvert = parseFloat(taxString);
    const taxtotal = (subtotalfortax * 0.1).toFixed();
    
    tax.innerText = taxtotal;

    const taxvalue = taxtotal;
    const taxvaluestring = parseFloat(taxvalue);
    const taxmain = taxvaluestring;

    const subtoalvalue = totalAmountToSubtotal;

    const getTotal = document.getElementById('total');
    const getTotalstring = getTotal.innerText;
    const total = getTotalstring;
    
    const totalAmmount = taxmain + subtoalvalue;

    getTotal.innerText = totalAmmount

    
    
})
document.getElementById('pluse-button-second').addEventListener('click',function(){

    const getsubtotalforonenonproduct = document.getElementById('produtAmount');
    const getsubtotalforonenonproductstring = getsubtotalforonenonproduct.innerText;
    const etsubtotalforonenonproductammount = parseFloat(getsubtotalforonenonproductstring)
    

    const getsubtotalforonenonproductsecond = document.getElementById('produtAmountSecond');
    const getsubtotalforonenonproductstringsecond = getsubtotalforonenonproductsecond.innerText;
    const etsubtotalforonenonproductammountsecond = parseFloat(getsubtotalforonenonproductstringsecond)

    const subtotal = document.getElementById('subtotal');
    const subtotalstring = subtotal.innerText;
    const subtotalstringconvert = parseFloat(subtotalstring)

    const totalAmountToSubtotal = etsubtotalforonenonproductammount + etsubtotalforonenonproductammountsecond;

    subtotal.innerText = totalAmountToSubtotal;
    const subtotalfortax = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax');
    const taxString = tax.innerText;
    const taxtotal = (subtotalfortax * 0.1).toFixed();
    
    tax.innerText = taxtotal;
    const taxvalue = taxtotal;
    const taxvaluestring = parseFloat(taxvalue);
    const taxmain = taxvaluestring;

    const subtoalvalue = totalAmountToSubtotal;

    const getTotal = document.getElementById('total');
    const getTotalstring = getTotal.innerText;
    const total = getTotalstring;
    
    const totalAmmount = taxmain + subtoalvalue;

    getTotal.innerText = totalAmmount
    
})

// -----------------
document.getElementById('minus-button').addEventListener('click',function(){

    const getsubtotalforonenonproduct = document.getElementById('produtAmount');
    const getsubtotalforonenonproductstring = getsubtotalforonenonproduct.innerText;
    const etsubtotalforonenonproductammount = parseFloat(getsubtotalforonenonproductstring)
    

    const getsubtotalforonenonproductsecond = document.getElementById('produtAmountSecond');
    const getsubtotalforonenonproductstringsecond = getsubtotalforonenonproductsecond.innerText;
    const etsubtotalforonenonproductammountsecond = parseFloat(getsubtotalforonenonproductstringsecond)

    const subtotal = document.getElementById('subtotal');
    const subtotalstring = subtotal.innerText;
    const subtotalstringconvert = parseFloat(subtotalstring)

    const totalAmountToSubtotal = etsubtotalforonenonproductammount + etsubtotalforonenonproductammountsecond;

    subtotal.innerText = totalAmountToSubtotal;
    const subtotalfortax = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax');
    const taxString = tax.innerText;
    const taxtotal = (subtotalfortax * 0.1).toFixed();
    
    tax.innerText = taxtotal;

    const taxvalue = taxtotal;
    const taxvaluestring = parseFloat(taxvalue);
    const taxmain = taxvaluestring;

    const subtoalvalue = totalAmountToSubtotal;

    const getTotal = document.getElementById('total');
    const getTotalstring = getTotal.innerText;
    const total = getTotalstring;
    
    const totalAmmount = subtoalvalue + taxmain;

    getTotal.innerText = totalAmmount
    
})
document.getElementById('minus-button-second').addEventListener('click',function(){

    const getsubtotalforonenonproduct = document.getElementById('produtAmount');
    const getsubtotalforonenonproductstring = getsubtotalforonenonproduct.innerText;
    const etsubtotalforonenonproductammount = parseFloat(getsubtotalforonenonproductstring)
    

    const getsubtotalforonenonproductsecond = document.getElementById('produtAmountSecond');
    const getsubtotalforonenonproductstringsecond = getsubtotalforonenonproductsecond.innerText;
    const etsubtotalforonenonproductammountsecond = parseFloat(getsubtotalforonenonproductstringsecond)

    const subtotal = document.getElementById('subtotal');
    const subtotalstring = subtotal.innerText;
    const subtotalstringconvert = parseFloat(subtotalstring)

    const totalAmountToSubtotal = etsubtotalforonenonproductammount + etsubtotalforonenonproductammountsecond;

    subtotal.innerText = totalAmountToSubtotal;
    const subtotalfortax = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax');
    const taxString = tax.innerText;
    const taxtotal = (subtotalfortax * 0.1).toFixed();
    
    tax.innerText = taxtotal;

    const taxvalue = taxtotal;
    const taxvaluestring = parseFloat(taxvalue);
    const taxmain = taxvaluestring;

    const subtoalvalue = totalAmountToSubtotal;
// 
    const getTotal = document.getElementById('total');
    const getTotalstring = getTotal.innerText;
    const total = getTotalstring;
    
    const totalAmmount = subtoalvalue + taxmain;

    getTotal.innerText = totalAmmount;
    
})


