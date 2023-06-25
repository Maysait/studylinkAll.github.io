let array = [3, 5, 2];
for(i=1; i<6; i++){
   let chislo = prompt(`Веддіть число`);
   let chislo_true = Number(chislo);
   let index = array.indexOf(chislo_true); 
   if(index == -1){
    array.push(chislo_true);
   }else{
       
   }
}
console.log(array);