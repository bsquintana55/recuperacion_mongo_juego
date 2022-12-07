const envio = document.getElementById('enviar')

let puntajeFinish = 0 , puntaje1 = 0, puntaje2 = 0, puntaje3 = 0, puntaje4 = 0, puntaje5 = 0, puntaje6 = 0 , puntaje7 = 0, puntaje8 = 0;


const first = document.querySelector('#select1');
const second = document.querySelector('#select2');
const third = document.querySelector('#select3');
const fourth = document.querySelector('#select4');

first.addEventListener('change', ()=>{
    let valorOption = first.value;
    let optionSelect = first.options[first.selectedIndex];

    console.log(`Tu opcion fue: ${optionSelect.text}`);
    console.log(`Tu opcion fue: ${optionSelect.value}`);

    if(valorOption == 2){
        console.log("ganaste")
        puntaje1 = 11
        console.log(puntaje1)
    }else{
        console.log("Perdiste")
    }
})

second.addEventListener('change', ()=>{
    let valorOption = second.value;
    let optionSelect = second.options[second.selectedIndex];

    console.log(`Tu opcion fue: ${optionSelect.text}`);
    console.log(`Tu opcion fue: ${optionSelect.value}`);

    if(valorOption == 1){
        console.log("ganaste")
         puntaje2 = 11
        console.log(puntaje2)
    }else{
        console.log("Perdiste")
    }
})

third.addEventListener('change', ()=>{
    let valorOption = third.value;
    let optionSelect = third.options[third.selectedIndex];

    console.log(`Tu opcion fue: ${optionSelect.text}`);
    console.log(`Tu opcion fue: ${optionSelect.value}`);

    if(valorOption == 3){
        console.log("ganaste")
         puntaje3 = 11
        console.log(puntaje3)
    }else{
        console.log("Perdiste")
    }
})

fourth.addEventListener('change', ()=>{
    let valorOption = fourth.value;
    let optionSelect = fourth.options[fourth.selectedIndex];

    console.log(`Tu opcion fue: ${optionSelect.text}`);
    console.log(`Tu opcion fue: ${optionSelect.value}`);

    if(valorOption == 3){
        console.log("ganaste")
         puntaje4 = 11
        console.log(puntaje4)
    }else{
        console.log("Perdiste")
    }
})



envio.addEventListener('click' , ()=>{

    const ques1 = document.querySelector('#inpu1').value;
    const ques2 = document.querySelector('#inpu2').value;
    const ques3 = document.querySelector('#inpu3').value;
    const ques4 = document.querySelector('#inpu4').value;

    if (ques1 === `use literatura` ) {
        console.log("ganaste")
         puntaje5 = 11
        console.log(puntaje5)
    } else {
        console.log("Perdiste")
    }

    if (ques2 === `db.createCollection("libros")`) {
        console.log("ganaste")
         puntaje6 = 11
        console.log(puntaje6)
    } else {
        console.log("Perdiste")
    }

    if (ques3 === `db.libros.insert({_id:1,nombre:"100 años de soledad",escritor"Gabriel García Márquez"})` || ques3 === `db.libros.insert({"_id":1,"nombre":"100 años de soledad","escritor":"Gabriel García Márquez"})`) {
        console.log("ganaste")
         puntaje7 = 17
        console.log(puntaje7)
    } else {
        console.log("Perdiste")
    }

    if (ques4 === `db.libros.update({_id:1},{$set: {nombre:"Relato de un náufrago"}})` || ques4 === `db.libros.update({"_id":1},{$set: {"nombre":"Relato de un náufrago"}})` || ques4 === `db.libros.update({_id:1},{$set:{nombre:"Relato de un náufrago"}})` || ques4 === `db.libros.update({"_id":1},{$set:{"nombre":"Relato de un náufrago"}})`) {
        console.log("ganaste")
         puntaje8 = 17
        console.log(puntaje8)
    } else {
        console.log("Perdiste")
    }

    puntajeFinish = puntaje1+puntaje2+puntaje3+puntaje4+puntaje5+puntaje6+puntaje7+puntaje8;

    if (puntajeFinish >= 70) {
        Swal.fire({ title:`Pasaste ya que tu nota fue de ${puntajeFinish}`, text:`La nota para pasar es con 70 o más. Ya estas listo para ir a la consola de mongo a seguir practicando :3`,icon:'success'})
    } else {
        Swal.fire({ title:`perdiste ya que tu nota fue de ${puntajeFinish}`, text:` La nota para pasar es con 70 o más Parece que no estas listo para ir a la consola de mongo, mejor intenta una vez mas :3`,icon:'error'})
    }
})