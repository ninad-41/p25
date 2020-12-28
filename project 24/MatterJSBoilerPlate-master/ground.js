class Ground{
    constructor(x,y,width,height){
      var options={
        isStatic : true  
      }  
      this.body = Bodies.rectangle(600,374,1200,20,options);
      this.width = 1200;
      this.height = 20;
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y,this.width,this.height);  
    }
};