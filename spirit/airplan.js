var airplanImg = new Image()
airplanImg.src = "image/my.png"

var airPlan = {
    x:canvas.width/2 - 33,
    y:canvas.height -82 -80,
    w:66,
    h:82,
    index:0,//开始飞机完好无损
    switchHz: 0,//图片切换延时
    bullets:[],//记录发射出去的子弹
    shootHz: 0,//子弹发射频率
    armType: 0,//武器类型
    hited: false, //是否被击中
    killed: false,
    

    draw: function(){
        if( airPlan.hited ){
            airPlan.switchHz++
        }
        if( airPlan.switchHz == 3 ){
            airPlan.index++
            airPlan.switchHz=0
        }
        if( airPlan.index==5 ){
            airPlan.killed = true
            isOver = true
        }
        
        if( !airPlan.killed ){
            context.drawImage( airplanImg, this.w*this.index, 0, this.w, this.h, this.x, this.y, this.w, this.h )
        }
    }, 
    
    attack: function(){
        if( this.hited ) //被击中后无法发射子弹
            return
        if( !this.hited ){
            this.shootHz++
        }
        if( this.shootHz == 5 ){
             musics[0].volume = 0.3
             musics[0].play();
            if( this.armType==0  ){//单排子弹大小6*14
                 var bullet = new Bullet( this.x+this.w/2-2,this.y-14,6,14,bulletImg1,1,5  )
            }
            else if( this.armType==1 ){//双排子弹大小48*14
                var bullet = new Bullet( this.x+this.w/2-24,this.y+20,48,14,bulletImg2,2,5  )
            }  
            //记录子弹
            this.bullets.push( bullet )
            //重置
            this.shootHz = 0
        }

        for( var i=0; i<this.bullets.length; ++i ){//对于每一个子弹都要判断是否超出屏幕
            if(this.bullets[i].y+this.bullets[i].h <= 0){
                this.bullets.splice(i,1)
            }else{
                this.bullets[i].move()
                this.bullets[i].draw()
            }
        }
        
    }
}