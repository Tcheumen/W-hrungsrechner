/* 
     Autor....: Lionel Tcheumen
     Version....: 0.001

*/


 let feld1 =  (document.getElementById("Währung1") as HTMLInputElement);
 let feld2 =  (document.getElementById("Währung2") as HTMLInputElement);
 let rate  = document.getElementById("Wechsel_rate") as HTMLInputElement;
 
 let idTabelle = document.getElementById("tabelle_erzeugen") as HTMLInputElement;
 
 let current: boolean = false;

// Austauschung die Felder

 function swapping(): void{

   
   let tmp: string ;

   tmp = feld1.value;
   feld1.value = feld2.value;
   feld2.value = tmp;


   }
 
  
 function tableCreate(): void{
 

   let tabelle = document.createElement("table") as HTMLElement;
   let tabelleTop = document.createElement("table") as HTMLElement;

   let tabelleBody = document.createElement("tbody") as HTMLElement;

   // verknüpfung der button Tabellenbezeichnung mit der Wechselrate und Tabelle erstellen
   let wechselRate = document.getElementById("Wechsel") as HTMLInputElement;
      
   wechselRate.innerHTML =  rate.value ;

    // Tabelle erstellen
   let zeile = document.createElement('tr');

      let cellule1 = document.createElement('th');
      cellule1.innerHTML = feld1.value;
      zeile.appendChild(cellule1);

      let cellule2 = document.createElement('th');
      cellule2.innerHTML = feld2.value;
      zeile.appendChild(cellule2);

      tabelleBody.appendChild(zeile);

   for(let i = 1; i <= 10; i++){

      let zeile = document.createElement('tr') as HTMLElement ;
      
      let cellule1 = document.createElement('td') as HTMLElement;
      let wert1  = document.createTextNode((i.toFixed(2))) ;
      cellule1.appendChild(wert1);
      zeile.appendChild(cellule1);

      let cellule2 = document.createElement('td') as HTMLElement;
      let wert2 = document.createTextNode((i*Number(rate.value)).toFixed(2)); 
      cellule2.appendChild(wert2);
      zeile.appendChild(cellule2);

     
      tabelleBody.appendChild(zeile);

      zeile.classList.add('farbe1');

   }

   for(let i = 20; i <= 100; i = i+10){

      let zeile = document.createElement('tr') as HTMLElement ;
      
      let cellule1 = document.createElement('td') as HTMLElement;
      let wert1  = document.createTextNode((i.toFixed(2))) ;
      cellule1.appendChild(wert1);
      zeile.appendChild(cellule1);

      let cellule2 = document.createElement('td') as HTMLElement;
      let wert2 = document.createTextNode((i*Number(rate.value)).toFixed(2)); 
      cellule2.appendChild(wert2);
      zeile.appendChild(cellule2);

     
      tabelleBody.appendChild(zeile);

      zeile.classList.add('farbe2');

   }

   for(let i = 200; i <= 1000; i = i + 100){

      let zeile = document.createElement('tr') as HTMLElement ;
      
      let cellule1 = document.createElement('td') as HTMLElement;
      let wert1  = document.createTextNode((i.toFixed(2))) ;
      cellule1.appendChild(wert1);
      zeile.appendChild(cellule1);

      let cellule2 = document.createElement('td') as HTMLElement;
      let wert2 = document.createTextNode((i*Number(rate.value)).toFixed(2)); 
      cellule2.appendChild(wert2);
      zeile.appendChild(cellule2);

  
      tabelleBody.appendChild(zeile);

      zeile.classList.add('farbe3');

   }

      let zeile1 = document.createElement('tr') as HTMLElement;
      let cellule = document.createElement('t1');
      cellule.innerHTML = "Tabellenbezeichnung";
      zeile1.appendChild(cellule);
      tabelleBody.appendChild(zeile1);
      

   tabelle.appendChild(tabelleTop);
   tabelle.appendChild(tabelleBody);

   let tabelle0 = document.querySelector("table") as HTMLElement;

   if (idTabelle.childElementCount > 0){
      idTabelle.removeChild(tabelle0);
      idTabelle.insertAdjacentElement("beforeend", tabelle);
   } else{
      idTabelle.insertAdjacentElement("beforeend", tabelle);
   }

  


 }

/*
 // Rechnen Euro in Dollars
 function changeToDollars() :void{

   feld2.value = String((Number(feld1.value)*(Number(rate.value))).toFixed(2));
 }

 // Rechnen Dollars in Euro
 function changeToEuro(): void{

   feld1.value = String((Number(feld2.value)/(Number(rate.value))).toFixed(2));
   
 }

 function swapping() :void{

   let tmp: string ;
   let tmp1: string;
   
   tmp = feld1.value;
   feld1.value = feld2.value;
   feld2.value = tmp;

   //
   let zeile = document.createElement('tr');

      let cellule1 = document.createElement('th');
      cellule1.innerHTML = "Euro";
      zeile.appendChild(cellule1);

      let cellule2 = document.createElement('th');
      cellule2.innerHTML = "Dollars";
      zeile.appendChild(cellule2);

      idTabelle.appendChild(zeile);
   
      tmp1 = zeile.appendChild(cellule1);
      zeile.appendChild(cellule1) =  zeile.appendChild(cellule2);
      zeile.appendChild(cellule2) = tmp1; 

 }

// verknüpfung der button Tabellenbezeichnung mit der Wechselrate und Tabelle erstellen

   function tableCreate(): void{

      let idTabelle = document.getElementById("tabelle") as HTMLInputElement;
      let idTabelle1 = document.getElementById("tabelle") as HTMLInputElement;
      let zeile = document.createElement('tr');
      let tbody = document.createElement('tbody');
      let zeile1 = document.createElement('t');

      // verknüpfung der button Tabellenbezeichnung mit der Wechselrate.

      let wechselRate = document.getElementById("Wechsel") as HTMLInputElement;
      
      wechselRate.innerHTML =  rate.value ;

     // Tabelle erstellen

      

      let cellule1 = document.createElement('th');
      cellule1.innerHTML = "Euro";
      zeile.appendChild(cellule1);

      let cellule2 = document.createElement('th');
      cellule2.innerHTML = "Dollars";
      zeile.appendChild(cellule2);

     
      
    //  idTabelle.appendChild(zeile);

      for(let i = 1; i <= 10; i++){

         let zeile = document.createElement('tr') ;
         
         let cellule1 = document.createElement('td');
         let wert1  = document.createTextNode(i.toFixed(2)) ;
         cellule1.appendChild(wert1);
         zeile.appendChild(cellule1);

         let cellule2 = document.createElement('td');
         let wert2 = document.createTextNode((i*Number(rate.value)).toFixed(2)); 
         cellule2.appendChild(wert2);
         zeile.appendChild(cellule2);

        // let idTabelle = document.getElementById("tabelle") as HTMLInputElement;
         tbody.appendChild(zeile);

         zeile.classList.add('farbe1');

      }
      
     // idTabelle.appendChild(tbody);

      for(let i = 20; i <= 100; i = i+10){

         let zeile = document.createElement('tr') ;
         
         let cellule1 = document.createElement('td');
         let wert1  = document.createTextNode(i.toFixed(2)) ;
         cellule1.appendChild(wert1);
         zeile.appendChild(cellule1);

         let cellule2 = document.createElement('td');
         let wert2 = document.createTextNode((i*Number(rate.value)).toFixed(2)); 
         cellule2.appendChild(wert2);
         zeile.appendChild(cellule2);

         let idTabelle =  document.getElementById("tabelle") as HTMLInputElement;
         idTabelle.appendChild(zeile);

         zeile.classList.add('farbe2');
      }

      for(let i = 200; i <= 1000; i = i+100){

         let zeile = document.createElement('tr') ;
         
         let cellule1 = document.createElement('td');
         let wert1  = document.createTextNode(i.toFixed(2)) ;
         cellule1.appendChild(wert1);
         zeile.appendChild(cellule1);

         let cellule2 = document.createElement('td');
         let wert2 = document.createTextNode((i*Number(rate.value)).toFixed(2)); 
         cellule2.appendChild(wert2);
         zeile.appendChild(cellule2);

         let idTabelle = document.getElementById("tabelle") as HTMLInputElement;
         idTabelle.appendChild(zeile);

         zeile.classList.add('farbe3');

      }

      
     
      
      
      let cellule = document.createElement('t1');
      cellule.innerHTML = "Tabellenbezeichnung";
      zeile1.appendChild(cellule);

      idTabelle.appendChild(zeile1);

    //  idTabelle1 = idTabelle;

      
      if(idTabelle.childElementCount > 1){

         idTabelle.removeChild(zeile);
         idTabelle.removeChild(tbody);
         idTabelle.removeChild(zeile1);
         idTabelle.appendChild(zeile);
         idTabelle.appendChild(tbody);
         idTabelle.appendChild(zeile1);
       
      } else{

         idTabelle.appendChild(zeile);
         idTabelle.appendChild(tbody);
         idTabelle.appendChild(zeile1);
         
      }

   }
   */