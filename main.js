canvas.onmousedown = function( event ){
    var x = event.offsetX
    var y = event.offsetY
    
    if( (x>=airPlan.x&& x<=airPlan.x+airPlan.w) && (y>=airPlan.y&& y<=airPlan.y+airPlan.h) ){
        canvas.onmousemove = function( event ){
            airPlan.x = event.x - airPlan.w/2 //中心
            airPlan.y = event.y - airPlan.h/2    
        }
    }
}

canvas.onmouseup = function( event ){
    canvas.onmousemove = null
}

var props = []

function createProp( ){
    if(  random(1,1000)<=10 ){
        var x = random(0,canvas.width-40)
        var type = random(0,1)
        var speed = random(5,10)
        var prop = new Prop(x, -68, 38,68,type,speed)
        props.push(prop)
    }
   
   
    for( var i=0; i<props.length; ++i ){
        if( props[i].y >= canvas.height || props[i].used ){
            props.splice(i,1)
            --i
        }else{
            props[i].move()
            props[i].draw()
        }
    }
}

var enemies = []

var add = 1000//每隔一段时间增加敌机出现的概率
function createEnemy( ){
    var num = random(1,add)
    
     var timeOver = null
     clearTimeout( timeOver )
     timeOver1 = setTimeout( function( ){
        add -= 20
        if( add<150 ){
            add = 150
        }
     },20000) 
    if( num<50 ){
        if( num<=40 ){//小飞机,宽38,高34
             var x = random(0,canvas.width-38)
             var speed = random( 2,10 )
             var enemy = new Enemy(x, -34, 38, 34, enemyImg1, speed, 1, 10, 5 )//1血
        }else if( num<=45 ){
             var x = random(0,canvas.width-46)
             var speed = random( 2,6 )
             var enemy = new Enemy(x, -64, 46, 64, enemyImg2, speed, 5, 20, 6 )//5血
        }else{
            var x = random(0,canvas.width-110)
             var speed = random( 2,4 )
             var enemy = new Enemy(x, -164, 110, 164, enemyImg3, speed, 10, 50, 10 )
        }
         enemies.push( enemy )
    }
    
    for( var i=0; i<enemies.length; ++i ){
        if( enemies[i].killed || enemies[i].y>=canvas.height  ){
            enemies.splice( i,1)
            --i
        }else{
            enemies[i].move()
            enemies[i].draw()
        } 
    }
}

score = 0//全局变量
isOver = false
function main (){ 
    
    //清除原图
    context.clearRect(0, 0, canvas.width, canvas.height)
    background.draw()
    createEnemy()
    airPlan.draw()//飞机在背景上方
    airPlan.attack()
    createProp( )
    appearCrash()
    context.font = "24px serif";
    context.fillText('Your Score: ' + score, 2, 30)

    if( isOver ){//等待两秒结束
        setTimeout( function(){
            clearInterval(intervalOver)
            musics[5].play()
            gameOver()
        } , 1000 )
    }
}

intervalOver = null
function run( ){
    intervalOver = setInterval( main, 30 ) 
}
   
run()

end_menu = document.getElementById("end-menu")
function gameOver(){
    var end_score = document.getElementById("end-score")
    end_score.innerHTML = score
    end_menu.style.display = "block"
    var restart = document.getElementById("restart")
    restart.onclick = function( ){
        location.reload() 
    }
}

