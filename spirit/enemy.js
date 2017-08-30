
var enemyImg1 = new Image()
enemyImg1.src = "image/enemy1.png"
var enemyImg2 = new Image()
enemyImg2.src = "image/enemy2.png"
var enemyImg3 = new Image()
enemyImg3.src = "image/enemy3.png"


//敌机
function Enemy(x,y,w,h,img,speed,hp, value, maxNum ){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
    this.speed = speed
    this.hp = hp
    this.value = value
    this.maxNum = maxNum//敌机图片状态数目,敌机死亡过程需要一些状态和时间
    this.hited = false//敌机是否被击中
    this.index = 0
    this.killed = false
    this.hz = 0//图片切换频率，图片不能切换的太快，
    
}


Enemy.prototype.draw = function( ){
    
    if( this.hited ){
        this.hz++
    }
    if( this.hz == 2 ){
        this.index++
        this.hz = 0
    }
    if(this.index==this.maxNum){
        this.killed = true
    }
    if(!this.killed){
        context.drawImage( this.img, this.index*this.w, 0, this.w, this.h, this.x, this.y, this.w, this.h )
    }
    if( this.killed ){
        score += this.value
    }
}

Enemy.prototype.move = function( ){
    this.y = this.y+this.speed
}