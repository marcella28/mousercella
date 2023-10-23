


 var tghost = 0
 var ghost = 6

 function vghost(){
    if(tghost===ghost) {
        document.getElementById("btcontinue3").style.display = "block";  
        }
 }
const caminhoNovaImagem = src="images/g2.png"
function altimg1(){
    document.getElementById("boo1").src = caminhoNovaImagem;
    tghost ++;
    vghost();
}

function altimg2(){
    document.getElementById("boo2").src = caminhoNovaImagem;
    tghost ++;
    vghost();
}

function altimg3(){
    document.getElementById("boo3").src = caminhoNovaImagem;
    tghost ++;
    vghost();
}

function altimg4(){
    document.getElementById("boo4").src = caminhoNovaImagem;
    tghost ++;
    vghost();
}

function altimg5(){
    document.getElementById("boo5").src = caminhoNovaImagem;
    tghost ++;
    vghost();
}

function altimg6(){
    document.getElementById("boo6").src = caminhoNovaImagem;
    tghost ++;
    vghost();
}

function mensagem() {
    let ação;
    if (confirm("Deseja ir para a proxima página?") == true) {
      ação = location = '23.html'
    } else {
        ação = location = '22.html'
    }
}

var check = 0
var tcheck = 9

function vcheck(){
    if(check===tcheck) {
        document.getElementById("btcont").style.display = "block";  
        }
 }

function addum(){
    check ++;
    vcheck();
}
function addd(){
    check ++;
    vcheck();
}
function addt(){
    check ++;
    vcheck();
}
function addq(){
    check ++;
    vcheck();
}
function addc(){
    check ++;
    vcheck();
}
function adds(){
    check ++;
    vcheck();
}
function addst(){
    check ++;
    vcheck();
}
function addo(){
    check ++;
    vcheck();
}
function addn(){
    check ++;
    vcheck();
}
function adddz(){
    check ++;
    vcheck();
}

var doce= 0
var ckdoce= 0
function docecheck(){
    if(ckdoce>doce) {
        document.getElementById("btcesta").style.display = "block";  
        }
 }
function doce1() {
    var checkbox = document.getElementById("balas");
    var imagem = document.getElementById("cesta1");

    if (checkbox.checked) {
        imagem.style.display = "block";
        ckdoce ++;
        docecheck(); // Mostra a imagem
    } else {
        imagem.style.display = "none"; // Oculta a imagem
    }
}

function doce2() {
    var checkbox = document.getElementById("maca");
    var imagem = document.getElementById("cesta2");

    if (checkbox.checked) {
        imagem.style.display = "block"; // Mostra a imagem
        ckdoce ++;
        docecheck();
    } else {
        imagem.style.display = "none"; // Oculta a imagem
    }
}

function doce3() {
    var checkbox = document.getElementById("pirulito");
    var imagem = document.getElementById("cesta3");

    if (checkbox.checked) {
        imagem.style.display = "block";
        ckdoce ++;
        docecheck(); // Mostra a imagem
    } else {
        imagem.style.display = "none"; // Oculta a imagem
    }
}

function doce4() {
    var checkbox = document.getElementById("olho");
    var imagem = document.getElementById("cesta4");

    if (checkbox.checked) {
        imagem.style.display = "block"; 
        ckdoce ++;
        docecheck();// Mostra a imagem
    } else {
        imagem.style.display = "none"; // Oculta a imagem
    }
}

function doce5() {
    var checkbox = document.getElementById("bala2");
    var imagem = document.getElementById("cesta5");

    if (checkbox.checked) {
        imagem.style.display = "block"; 
        ckdoce ++;
        docecheck();// Mostra a imagem
    } else {
        imagem.style.display = "none"; // Oculta a imagem
    }
}

function doce6() {
    var checkbox = document.getElementById("dente");
    var imagem = document.getElementById("cesta6");

    if (checkbox.checked) {
        imagem.style.display = "block";
        ckdoce ++;
        docecheck(); // Mostra a imagem
    } else {
        imagem.style.display = "none"; // Oculta a imagem
    }
}

    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        document.getElementsByClassName('mostrar')[0].style.display = 'block';
      }
    

    var perso= 8
    var ckperso= 0
    function persocheck(){
        if(ckperso===perso) {
            document.getElementById("btperso").style.display = "block";  
            }
     }

     function ch1(){
        ckperso ++;
        persocheck();
        document.getElementById("img1").style.display = "block"; 
    }
    function ch2(){
        ckperso ++;
        persocheck();
        document.getElementById("img2").style.display = "block"; 

    }

    function ch3(){
        ckperso ++;
        persocheck();
        document.getElementById("img3").style.display = "block"; 

    }

    function ch4(){
        ckperso ++;
        persocheck();
        document.getElementById("img4").style.display = "block"; 

    }
    function ch5(){
        ckperso ++;
        persocheck();
        document.getElementById("img5").style.display = "block"; 

    } 
    function ch6(){
        ckperso ++;
        persocheck();
        document.getElementById("img6").style.display = "block"; 

    }
    function ch7(){
        ckperso ++;
        persocheck();
        document.getElementById("img7").style.display = "block"; 

    }
    function ch8(){
        ckperso ++;
        persocheck();
        document.getElementById("img8").style.display = "block"; 

    }

    var movie= 0
    var ckmovie= 0
    function moviecheck(){
        if(ckmovie>movie) {
            document.getElementById("btmovie").style.display = "block";  
            }
     }

     function mov1(){
        ckmovie ++;
        moviecheck();
        document.getElementById("imgn1").style.display = "block"; 
    }
    function mov2(){
        ckmovie ++;
        moviecheck();
        document.getElementById("imgn2").style.display = "block"; 
    }
    function mov3(){
        ckmovie ++;
        moviecheck();
        document.getElementById("imgn3").style.display = "block"; 
    }
    function mov4(){
        ckmovie ++;
        moviecheck();
        document.getElementById("imgn4").style.display = "block"; 
    }
    function mov5(){
        ckmovie ++;
        moviecheck();
        document.getElementById("imgn5").style.display = "block"; 
    }

function exbutton(){
    if (document.getElementById("days").value == "sexta")
            document.getElementById("btday").style.display = "block";
        else document.getElementById("btday").style.display = "none";
}

function exbt(){
    document.getElementById("btitens").style.display = "block";
}

function exbtdate(){
    if (document.getElementById("days").value == "out")
            document.getElementById("btdate").style.display = "block";
        else document.getElementById("btdate").style.display = "none";

}

function exbtm(){
    document.getElementById("btmusic").style.display = "block";
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementsByClassName('mostrar')[0].style.display = 'block';
  }

  function atualizarCampoCopia() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var nomcompleto = document.getElementById('copia');
    nomcompleto.textContent = nome + ' ' + sobrenome;
}

window.onload = atualizarCampoCopia; 






  










 


