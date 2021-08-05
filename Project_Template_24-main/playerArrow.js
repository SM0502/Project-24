shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    MutationObserver.Body.setStatic(this.body, false);
    MutationObserver.Body.setVeloity(this.body, { x: velocity.x, y: velocity.y });

}

if(keyCode === 32){
    arrow.shoot(playerArcher.body.angle);
}