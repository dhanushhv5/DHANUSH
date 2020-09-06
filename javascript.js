function fun()
{
  var v1 = parseInt(document.getElementById('val1').value);
  var v2 = parseInt(document.getElementById('val2').value);
  var v3 = parseInt(document.getElementById('val3').value);
  var v4 = parseInt(document.getElementById('val4').value);
  var v5 = parseInt(document.getElementById('val5').value);
  var v6 = parseInt(document.getElementById('val6').value);
  var v7 = parseInt(document.getElementById('val7').value);
  var v8 = parseInt(document.getElementById('val8').value);
  var sum = v1+v2+v3+v4+v5+v6+v7+v8;
  var max = parseInt(prompt("Enter Maximum Marks allotted:"));
  var pct = (sum/max)*100;
  var lose = max - sum;

  document.getElementById("pct").innerHTML = pct+" %";
  document.getElementById("total").innerHTML = sum;
  document.getElementById("lose").innerHTML = lose;
  document.getElementById("max").innerHTML = max;
  var name = document.getElementById('name').value;
  document.getElementById('user').innerHTML = name;
  var res = document.getElementById("caption");
  if (pct<45)
  {
    res.style.background = "red";
  }
  else if (pct<75)
  {
    res.style.background = "orange";
  }
  else if (pct<90)
  {
    res.style.background = "lightGreen";
  }
  else if (pct>95)
  {
    res.style.background = "green";
  }
}
