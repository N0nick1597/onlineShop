document.querySelectorAll('input').forEach((btn) => {
    btn.addEventListener('click', (e) => { 
      const insertedValue = e.target.value;
      if (insertedValue == "C") clear();
      else if(insertedValue =="=") equal();
      else if(insertedValue == "<") backspace();
      else document.getElementById('textview').value += insertedValue;
    }, false);
  });

function equal(){
    var temp;
    temp = document.getElementById("textview").value;
    if(temp)
    {
        document.getElementById("textview").value = eval(temp);
    }
}

function clear()
{
    document.getElementById('textview').value = "";
}

function backspace()
{
    let value;
    value = document.getElementById('textview').value;
    value = value.substr(0, value.length-1);
    document.getElementById('textview').value = value;
}