let btn = document.getElementById('btn');
let btnAlive = false;

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;

    
    let tipAmount = document.getElementById('tip-amount').value = (billAmount * tipPercentage) / 100;
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
    btnAlive = true;

})

var date = new Date();
var NoTimeDate = date.getDate() +'/'+(date.getMonth()+1)+'/'+ date.getFullYear(); 
document.getElementById("button").style.display = "none";

function showBill(){
    if(btnAlive === true){
        document.getElementById("datetime").textContent = "Logged at: " + date;
        document.getElementById("resname").textContent = "Restaurant Name: " + document.getElementById("name").value;
        document.getElementById("billamt").textContent = "Bill Amount: $" + document.getElementById("bill-amount").value;
        document.getElementById("tipamt").textContent = "Tip Amount: $" + document.getElementById("tip-amount").value;
        document.getElementById("finalamt").textContent = "Final Bill: $" + document.getElementById("total-bill").value;
        document.getElementById("button").style.display = "inline";
    }      
}

const element = document.getElementById("main");
var opt = {
    margin:       1,
    filename:     'Bill '+ NoTimeDate + ".pdf",
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };


function generatePDF(){
    setTimeout(function(){alert("File has been downloaded")},2000);
    html2pdf().set(opt).from(element).save();
}
