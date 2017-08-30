//子弹
var bulletImg1 = new Image()
bulletImg1.src = "image/bullet1.png"

var bulletImg2 = new Image()
bulletImg2.src = "image/bullet2.png"

function Bullet( x,y,w,h,img,hurt, speed ){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
    this.hurt = hurt
    this.speed = speed
}

Bullet.prototype.draw = function( ){
    context.drawImage( this.img, this.x, this.y, this.w, this.h )
}

Bullet.prototype.move = function( ){
    this.y = this.y - this.speed
}