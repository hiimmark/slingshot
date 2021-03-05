class Slingshot{
    constructor(bodyA1,pointB1){
        var options = {
            bodyA : bodyA1,
            pointB : pointB1,
            stiffness:0.04,
            length:10
          }
          this.pointB = pointB1;
          this.bodyA = bodyA1
           this.sling = Constraint.create(options);
           
           
          World.add(gameworld,this.sling);
    }
    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null
    }
}