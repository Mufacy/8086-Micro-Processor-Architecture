function CalculateMemory ()
{
    //address bus count and data bus count and memory capacity here
    var AddBUS  = document.getElementById("EDTAddress").value;
    var DataBUS = document.getElementById("EDTData").value;
    var MemoryCapacity = document.getElementById("EDTCapacity").value;

    var acount = AddBUS % 10;

    //this will be converted to Kilo or Mega or giga..
    var asize = AddBUS - acount;

    //force user to fill at least two fields
    if (AddBUS === "")
    {
        if ((DataBUS === "") || (MemoryCapacity === ""))
        {
            alert("you need at least two details");
            return false;
        }
    }
    else
    if (DataBUS === "")
    {
        if ((AddBUS === "") || (MemoryCapacity === ""))
        {
            alert("you need at least two details");
            return false;
        }
    }
    else
    if (MemoryCapacity === "")
    {
        if ((DataBUS === "") || (AddBUS === ""))
        {
            alert("you need at least two details");
            return false;
        }
    }

    var DataLinesCount, AddressLinesCount, MemorySize, MemOrginization;
    var datasize = 'empty string';
    switch(asize)
    {
        case 10:  datasize = 'K'; 
                  asize = 1024;  break;
        case 20:  datasize = 'M'; 
                  asize = 1048576;  break;
        case 30:  datasize = 'G'; 
                  asize = 1073741824;  break;
        default: datasize = '';
    }
    //get the textarea element and fill it with the method
    HowToText = document.getElementById("EDTHowTo");
    if ((DataBUS != null) && (AddBUS != null))
    {
        
    }
    else 
    if ((MemoryCapacity != null) && (AddBUS != null))
    {
        MemOrginization = (MemoryCapacity / DataBUS);
        AddressLinesCount = AddBus;
        DataLinesCount = MemoryCapacity / (MemoryCapacity / asize);
        MemorySize = MemoryCapacity;
    }
    else 
    if ((MemoryCapacity != null) && (DataBUS != null)) 
    {
        MemOrginization = (MemoryCapacity / DataBUS);
        DataLinesCount = DataBUS;
        AddressLinesCount = sqrt(MemOrginization);
        MemorySize = MemoryCapacity;
    }

    HowToText.value =  'Address Bus count = '+AddBUS+'\n';
    HowToText.value += 'Data Bus count = '+AddBUS;
    HowToText.value += '\nMemory Structure is '+2+'^'+asize;
    HowToText.value += ' 2^'+acount;
    HowToText.value += ' X '+DataBUS+' and it equals ';
    
    var calculatedpower = Math.pow(2,acount);
    HowToText.value += calculatedpower+datasize+' X '+DataBUS;
    calculatedpower = calculatedpower*DataBUS;
    HowToText.value += '\nMemory Capacity is '+calculatedpower+' '+datasize;
}