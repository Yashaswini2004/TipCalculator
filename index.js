document.getElementById("btn").addEventListener("click",function(){
   const Bill=parseFloat(document.getElementById("bill").value);
    const tipPercent=parseFloat(document.getElementById("tip").value);
    if(isNaN(Bill)||isNaN(tipPercent))
    {
        alert("Please enter the valid number for both input..");
        return;
    }
    const tipAmount=(tipPercent*Bill)/100;
    const Total=Bill+tipAmount;
    document.getElementById("text3").innerHTML=Total.toFixed(2);
})