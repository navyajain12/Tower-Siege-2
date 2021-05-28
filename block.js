class Block{
  constructor(x, y, width, height) {
      var options = {
                   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visaibility = 255;
    }
    display(){
      if(this.body.speed < 3) {
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 10;
        tint(255,this.visibility);
        rect(this.x, this.y, 20, 30);
        pop();
      }
    }
}
