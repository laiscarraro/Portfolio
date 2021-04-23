
function createCup(world) {
  var pl = planck, Vec2 = pl.Vec2, Transform = pl.Transform;
  world.createBody(Vec2(0.0, 0.0)).createFixture(pl.Edge(Vec2(50.0, 0.0), Vec2(-50.0, 0.0)), 0.0);
  
  var bottom = pl.Box(1.5, 0.15);
  bottom.isSensor = true;
  var left = pl.Box(0.15, 2.7, Vec2(-1.45, 2.35), 0.2);
  var right = pl.Box(0.15, 2.7, Vec2(1.45, 2.35), -0.2);
    
  var container = world.createBody(Vec2(0.0, 2.0));
  container.createFixture(bottom, 4.0);
  container.createFixture(left, 4.0);
  container.createFixture(right, 4.0);
}

function createBall(world) {
  var pl = planck, Vec2 = pl.Vec2, Transform = pl.Transform;
  world.createBody(Vec2(0.0, 0.0)).createFixture(pl.Edge(Vec2(50.0, 0.0), Vec2(-50.0, 0.0)), 0.0);
  
  var circle = pl.Circle(Vec2(-0.5, 0.5), 1.0);
  var body = world.createDynamicBody({
    position : Vec2(pl.Math.random(0, p5.windowWidth), 50.0),
    angle : pl.Math.random(-Math.PI, Math.PI)
  });
  body.createFixture(circle, 2.0);
}
