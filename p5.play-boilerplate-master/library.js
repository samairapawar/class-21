function isTouching(fixed,moving){

    if(moving.y-fixed.y<=moving.height/2+fixed.height/2 && fixed.y-moving.y<=moving.height/2+fixed.height/2 &&moving.x-fixed.x<=moving.width/2+fixed.width/2 && fixed.x-moving.x<=moving.width/2+fixed.width/2){
      
   return true;
  
    }
    else
      return false 
    
  
  }

  function bouneOff(a,b){
 if(isTouching(a,b)){

 a.velocityX*=-1
b.velocityX*=-1
 }


  }