function dwarfRollCall(dwarves) {
var array=[ ];
for(var i=1;i<dwarves.length+1;i++){
  array.push(`${i}. ${dwarves[i-1]}`)
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
          return array.slice(0,1)}
      else{
        return"no cheese!"}
  }
                       
        
       
      

       

