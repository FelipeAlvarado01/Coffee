let cursos =document.getElementById('cursos');
let modal_container=document.getElementById("modal_container");

cursos.addEventListener('click',function(){
  modal_container.innerHTML+=`   <div class="modal_container">
  <div class="modal__conten">
    <img src="./src/assets/img/img1-removebg-preview.png" alt="">
    <h3>WLANS COFFÉ</h3><br>
    <p>Introduce el codigo <samp>WLANS 1O</samp>.</p>
    <button class="button_modal"><a href="index.html">Cupón 10%</a></button>
    <button class="modal__closed" id="closed">X</button>
  </div>
</div>
`
let closed=document.getElementById('closed');

closed.addEventListener('click',function(){
   location.reload();
});

})
/* mostrar y ocultar recetas */
/* div1*/  
let ejemplo=document.getElementById('ejemplo');
let mostrar =document.getElementById('mostra');
let ejemplo1=document.getElementById('ejemplo1');
let esconder =document.getElementById('esconder');
let contador1=0;

ejemplo1.addEventListener('click',function(e){
  esconder.style.display='none';
  mostra.style.display='block';
  e.preventdefault()
})

ejemplo.addEventListener('click',function(e){
  esconder.style.display='block';
  mostra.style.display='none';
  contador1++;

/* funciòn vistas card1*/
   document.getElementById('meGusta1').innerHTML =`
  ${contador1}`;

})

/* div2*/ 
let ejemplo_div2=document.getElementById('ejemplo_div2');
let mostrar_div2 =document.getElementById('mostra_div2');
let ejemplo1_div2=document.getElementById('ejemplo1_div2');
let esconder_div2 =document.getElementById('esconder_div2');
let contador2=0;
ejemplo1_div2.addEventListener('click',function(e){
  esconder_div2.style.display='none';
  mostrar_div2.style.display='block';
  e.preventdefault()
})

ejemplo_div2.addEventListener('click',function(){
  esconder_div2.style.display='block';
  mostrar_div2.style.display='none';
  contador2++;
  /* funciòn vistas card1*/
  document.getElementById('meGusta2').innerHTML =`
  ${contador2}`;
})

/* div3 */

let ejemplo_div3=document.getElementById('ejemplo_div3');
let mostrar_div3 =document.getElementById('mostra_div3');
let ejemplo1_div3=document.getElementById('ejemplo1_div3');
let esconder_div3 =document.getElementById('esconder_div3');
let contador3=0;

ejemplo1_div3.addEventListener('click',function(e){
  esconder_div3.style.display='none';
  mostrar_div3.style.display='block';
  e.preventdefault()
})

ejemplo_div3.addEventListener('click',function(e){
  esconder_div3.style.display='block';
  mostrar_div3.style.display='none';
/* funciòn vistas card3*/  
  contador3++;
  document.getElementById('meGusta3').innerText =`
  ${contador3}`;
  e.preventdefault()
})
/* div4 */

let ejemplo_div4=document.getElementById('ejemplo_div4');
let mostra_div4 =document.getElementById('mostra_div4');
let ejemplo1_div4=document.getElementById('ejemplo1_div4');
let esconder_div4 =document.getElementById('esconder_div4');
let contador4=0;

ejemplo1_div4.addEventListener('click',function(e){
  esconder_div4.style.display='none';
  mostra_div4.style.display='block';
  e.preventdefault()
})


ejemplo_div4.addEventListener('click',function(e){
  esconder_div4.style.display='block';
  mostra_div4.style.display='none';
/* funciòn vistas card4*/
  contador4++;
  document.getElementById('meGusta4').innerText =`
  ${contador4}`;
e.preventDefault()
})
/* div5 */

let ejemplo_div5=document.getElementById('ejemplo_div5');
let mostra_div5 =document.getElementById('mostra_div5');
let ejemplo1_div5=document.getElementById('ejemplo1_div5');
let esconder_div5 =document.getElementById('esconder_div5');
let contador5=0;

ejemplo1_div5.addEventListener('click',function(e){
  esconder_div5.style.display='none';
  mostra_div5.style.display='block';
  e.preventdefault()
})


ejemplo_div5.addEventListener('click',function(e){
  esconder_div5.style.display='block';
  mostra_div5.style.display='none';
  /* funciòn vistas card5*/
  contador5++;
  document.getElementById('meGusta5').innerText =`
  ${contador5}`;
  e.preventDefault();
})

/* div6 */
let ejemplo_div6=document.getElementById('ejemplo_div6');
let mostra_div6 =document.getElementById('mostra_div6');
let ejemplo1_div6=document.getElementById('ejemplo1_div6');
let esconder_div6 =document.getElementById('esconder_div6');
let contador6=0;

ejemplo1_div6.addEventListener('click',function(e){
  esconder_div6.style.display='none';
  mostra_div6.style.display='block';
  e.preventdefault()
})


ejemplo_div6.addEventListener('click',function(e){
  esconder_div6.style.display='block';
  mostra_div6.style.display='none';
/* funciòn vistas card6*/
  contador6++;
  document.getElementById('meGusta6').innerText =`
  ${contador6}`;
  e.preventDefault();
})




