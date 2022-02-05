

let tin = prompt ('Введіть ваш ІПН');
   console.log(`Ваш ІПН = ${tin}`);
   let factor = [-1,5,7,9,4,6,10,5,7];

   let arrtin = [...tin];

   
   let mult = factor.map((x, i) => { return x * arrtin[i]; });   

   let sum = mult.reduce((a,b)=>a+b);

   let x = sum - (11*(Math.trunc(sum/11)));

   let end = tin.slice(9,10);
if (x == end) 
{
   let sex = tin.slice(-2,-1);
   if (sex%2==0)
      {console.log(`стать: жіноча`)}
   else
      {console.log(`стать: чоловіча`)};

   let d = new Date(1900,0,1);
    //console.log(+d);

   let diff = tin.slice(0,5)-1;
   let hb = +d+(diff)*1000*60*60*24;
   // console.log(+hb);

   let newhb = new Date(hb);
   // console.log(`Дата народження : ${newhb}`);
   console.log(`Дата народження:${newhb.getDate()} ${newhb.getMonth()+1} ${newhb.getFullYear()}`);
 
   let currentd = new Date();
 
   let currentyear = currentd.getFullYear();
   let newhbyear = newhb.getFullYear();
   let fullyear = currentyear-newhbyear;


   //if (currentd.getMonth() < newhb.getMonth()) 
//
   //   {console.log (`повних років : ${fullyear-1} `)}
   //else if (currentd.getMonth() > newhb.getMonth()) 
   //   {console.log (`повних років : ${fullyear} `)}
   //else 
   //   { if (currentd.getDate() < newhb.getDate(0))
   //         {console.log (`повних років : ${fullyear-1} `)}
   //     else
   //         {console.log (`повних років : ${fullyear} `)}
   //    }
   fullyear = (currentd.getMonth() < newhb.getMonth())||(currentd.getDate() < newhb.getDate(0))? fullyear-1 : fullyear;
   console.log (`повних років : ${fullyear} `);



}
else 
{console.log (`такого ІПН не існує`)}