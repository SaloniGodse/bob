class Bob {
    constructor(x,y) {
        var options = {
           isStatic : true,
           restitution:0.3,
           friction : 0.5,
           density : 2.0, 
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius=40;
        
        World.add(world,this.body);
    }
    display() {
    var angle = this.body.angle;
    push ();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    fill ("purple");
    ellipse(0, 0, this.radius);
    
    pop();
    }
    
    }