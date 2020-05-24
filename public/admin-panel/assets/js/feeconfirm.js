function validate() {
    var name = document.getElementById("iname");
    var rollNo = document.getElementById("irollno");
    var fclass = document.getElementById("iclass");
    var bankChallanNumber = document.getElementById("ibcn");
    var bankDepositId = document.getElementById("ibdi");
    var feeDepositDate = document.getElementById("ifdd");
    var submitButton = document.getElementById("isubmit");
    var cancleButton = document.getElementById("icancle");

    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(rollNo.value==="")
    {
        alert("please enter rollno");
        return;
    }
    if(fclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(bankChallanNumber.value==="")
    {
        alert("please enter bank challan no");
        return;
    }
    if(bankDepositId.value==="")
    {
        alert("please enter bank deposit id");
        return;
    }
    if(feeDepositDate.value==="")
    {
        alert("please enter fee deposit date");
        return;
    }
    var formData = {
                    "name" : name.value,
                    "rollNo" : rollNo.value,
                    "fclass" : fclass.value,
                    "bankChallanNumber" : bankChallanNumber.value,
                    "bankDepositId" : bankDepositId.value,
                    "feeDepositDate" : feeDepositDate.value,
    };
}