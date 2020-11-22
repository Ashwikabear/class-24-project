class Trash {
constructor(x,y){
var options={
'isStatic':false,
'restitution':0.4,
'friction':0.5,
'density':1.2
}
this.body= Bodies.circle(x,y,20,options)
this.width=25;
this.height=25;
World.add(world ,this.body)

}
display(){
  var pos= this.body.position
  var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.width,this.height)
fill(440);

pop()

}
}