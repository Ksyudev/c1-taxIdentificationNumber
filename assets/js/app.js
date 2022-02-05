let tin = prompt ('Введіть ваш ІПН');
   console.log(`Ваш ІПН = ${tin}`);

   let sex = tin.slice(-2,-1);
   if (sex%2==0)
      {console.log(`стать: жіноча`);}
   else
      {console.log(`стать: чоловіча`);};

   let d = new Date(1900,0,1);
    //console.log(+d);

   let diff = tin.slice(0,5)-1;
   let hb = +d+(diff)*1000*60*60*24;
   // console.log(+hb);

   let newhb = new Date(hb);
   // console.log(`Дата народження : ${newhb}`);
   console.log(`Дата народження:${newhb.getDate()} ${newhb.getMonth()+1} ${newhb.getFullYear()}`);
 
   let currentd = new Date();
   //console.log(+currentd);

   let fullyear = Math.trunc((+currentd -hb)/1000/60/60/24/365);
   console.log (`повних років : ${fullyear} `);