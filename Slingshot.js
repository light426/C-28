class Slingshot{
    constructor(bodyA, coordinates){
        var options = {
            bodyA: bodyA,
            pointB: coordinates,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.coordinates = coordinates;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.coordinates;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    

}