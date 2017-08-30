//道具
var proImg = new Image()
proImg.src = "image/prop.png"

function Prop(x,y,w,h,type,speed){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.type = type
    this.speed = speed
    this.used = false
}


Prop.prototype.draw = function( ){
    if( !this.used ){
        context.drawImage( proImg, this.type*this.w, 0, this.w, this.h, this.x, this.y, this.w,this.h )
    }      
}

Prop.prototype.move = function( ){
    this.y = this.y+this.speed
}
