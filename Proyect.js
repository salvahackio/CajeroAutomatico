class Bill
{
  constructor(v,c,i)
  {
    this.valor = v;
    this.cantidad = c;
    this.image = i;
  }
}

var caja = [];
var entregado = [];
caja.push(new Bill(50,3));
caja.push(new Bill(20,2));
caja.push(new Bill(10,2));
function entregarDinero()
{
  var t = document.getElementById('dinero');
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor( dinero / bi.valor);
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else {
        papeles = div;
      }
      if (bi.valor == "50")
      {
        entregado.push (new Bill(bi.valor,papeles,"<img src='50so.jpg' width='120px'/>"));
      }
      else if (bi.valor == "20") {
        entregado.push (new Bill(bi.valor,papeles,"<img src='20so.jpg' width='120px'/>"));
      }else {
      entregado.push (new Bill(bi.valor,papeles,"<img src='101so.jpg' width='120px'/>"));
     }

        dinero  = dinero - (bi.valor * papeles);
    }
  }
  if (dinero > 0 )
  {
    r.innerHTML = "No se tiene esa cantidad de dinero"
  }else {
     for(var e of entregado)
     {
      r.innerHTML +=  e.cantidad + " Billetes de "+ e.image + " <br>"
     }
  }
}
var dinero;
var div;
var papeles;
var r = document.getElementById('resultado')
var b = document.getElementById('Extraer');
b.addEventListener("click", entregarDinero);
