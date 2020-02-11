function dwarfRollCall(dwarves) {
var array=[ ];
for(var i=0;i<dwarves.length/2;i++){
  array.push(`${i+1}. ${dwarves[i]}`)
}
return array.join(' ')
}

function summonCaptainPlanet(planeteerCalls){
  var array=[];
  for(var i=0;i<planeteerCalls.length;i++){
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
  }return array
}

function longPlaneteerCalls(words) {
  var array=[];
  for(var i=0;i<words.length;i++){
    if(words[i].length<5){
      array.push(words[i]);
    }
  }return array.length<words.length
}

function findTheCheese (foods){
  var array=[];
  for(var b=0;b<foods.length;b++){
    if(foods[b]==="cheddar"){
      array.push(foods[b])
    }
    else if(foods[b]==="guada"){
      array.push(foods[b])
    } 
    else if(foods[b]==="camembart"){
      array.push(foods[b])
       }
  }
  
       
       if(array.length>0){
          return array[0]}
      else{
        return"no cheese!"}
  }
  // exampleString = "one"
  // exampleString[0] === "o"
   function wordsWithB(array){
     var arrayB=[];
     for(var i=0;i<array.length;i++){
       if(array[i][0]==="b"){arrayB.push(array[i])
         
       }
     }return arrayB
   }
   
   
   
   
   
       
      

       

