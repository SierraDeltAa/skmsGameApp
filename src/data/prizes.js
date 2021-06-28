import Prize from "./classes/Prize";

const chance = 100;
// const rare_chance = 1/100;

const p_1 = new Prize(0,"Prix 1","-25% de remise",30);
const p_2 = new Prize(1,"Prix 2","-50% de remise",25);
const p_3 = new Prize(2,"Prix 3","-75% de remise",15);
const p_4 = new Prize(3,"Prix 4","-75% de remise",10);
const p_5 = new Prize(4,"Prix 5","-75% de remise",8);
const p_6 = new Prize(5,"Prix 6","-75% de remise",5);
const p_7 = new Prize(6,"Prix 7","-75% de remise",3);
const p_8 = new Prize(7,"Prix 8","-75% de remise",2);
const p_9 = new Prize(8,"Prix 9","-75% de remise",1);


export const prizes = [p_1,p_2,p_3,p_4,p_5,p_6,p_7,p_8,p_9];


//         title: "yoga - pilates",
//         content: "- 25 %"

//         title: "yoga - pilates",
//         content: "- 35 %"

//         title: "Préparation mentale",
//         content: "Bon d'une valeur de 35 €"

//         title: "forfait duo",
//         content: "- 40 %"

//         title: "Zumba - H.I.I.T",
//         content: "- 25 %"

//         title: "Zumba - H.I.I.T",
//         content: "- 35 %"

//         title: "Coaching personnel",
//         content: "- 50 % pour un carnet de 10 séances"

//         title: "KravMaga / MMA",
//         content: "- 25 %"

//         title: "All Inclusive",
//         content: "- 100 %"