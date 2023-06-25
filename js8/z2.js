let suma = 0;
let kilkist = 0;

let yu = true;







while(yu == true){
suma = suma + Number(prompt(`ведіт цену тавару`));
kilkist++;
yu = confirm(`ви будете ще купувапти щась`);
}
console.log(`Ви придбали ${kilkist} товарів на зальну вартісь ${suma} грн`);