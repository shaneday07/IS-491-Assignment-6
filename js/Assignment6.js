function Hide()
{
    document.getElementById("create").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";
}
function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    var customerid = document.getElementById("custID").value;
    var customername = document.getElementById("cusname").value;
    var customercity = document.getElementById("custcity").value;
    
    var newcustomer = '{"CustomerID":"' + customerid +'","CompanyName":"' + customername +'", "CustomerCity":"' + customercity + '" }';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            CreateResult(result);
        }
    }
    
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "applicaton/x-www-form-urlencoded");
    objRequest.send(newcustomer);  
}

function CreateResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("createresult").innerHTML = "The operation was successful"
        
    }
    else
    {
        
        document.getElementById("createresult").innerHTML = "The operation was not successful" + "<br>" + output.Exception;
    }
}

function  UpdateOrderAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var ordernumber = document.getElementById("ordernum").value;
    var shiptoname = document.getElementById("shipname").value;
    var shiptoaddress = document.getElementById("shipaddress").value;
    var shiptocity = document.getElementById("shipcity").value;
    var shiptocode = document.getElementById("shipcode").value;
                                        
    var updateshipping = '{"OrderID":"' + ordernumber + '","ShipAddress":"' + shiptoaddress + '","ShipCity":"' + shiptocity + '","ShipName":"' + shiptoname + '","ShipPostcode":"' + shiptocode+'"}';    //+ ',"ShipAddress":"' + shiptoaddress + '","ShipName":"' + shiptoname + '","ShipPostcode":"' + shiptocode + 
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var res = JSON.parse(objRequest.responseText);
            UpdateResult(res);
            
        }
    }
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(updateshipping);
}

function UpdateResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("updateresult").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("updateresult").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}

function DeleteCustomer()
{
    var getRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/customerID";
    
    var customerid = document.getElementById("CID").value;
        
    var byecustomer = '{"CustomerID":"' + customerid + '"}';
    
    getRequest.onreadystatechange = function()
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var rez = JSON.parse(getRequest.responseText);
            DeleteResult(rez);
            
        }
    }
    
    getRequest.open("GET",url,true);
    getRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    getRequest.send(byecustomer);
}

function DeleteResult(rez)
{
    if (rez.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("deleteresult").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("deleteresult").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}

function Change()
{
    if (document.getElementById("menu").value == "Create Customer")
    {
        document.getElementById("create").style.display = "inline";
        document.getElementById("update").style.display = "none";
        document.getElementById("delete").style.display = "none";
        
    }
    else if (document.getElementById("menu").value == "Update Order Address")
    {
        document.getElementById("create").style.display= "none";
        document.getElementById("update").style.display = "inline";
        document.getElementById("delete").style.display = "none";
    }
    else if (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("create").style.display = "none";
        document.getElementById("update").style.display = "none";
        document.getElementById("delete").style.display = "inline";
    }
    else
    {
        document.getElementById("create").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.visibility = "hidden";
    }     
}