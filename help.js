
function random( x, y ){
    return parseInt(Math.random()*(y-x+1)+x)
}

//碰撞检测
function crash( a, b ){
    var a_left = a.x
    var a_right = a.x + a.w
    var a_top = a.y
    var a_bottom = a.y + a.h
    
    var b_left = b.x
    var b_right = b.x + b.w
    var b_top = b.y
    var b_bottom = b.y + b.h
    
    //矩形相交情况较少
    if( a_right < b_left || a_bottom < b_top || a_left > b_right || a_top > b_bottom ){
        return false
    }else{
        return true
    }
}


//如果有物体碰撞
function appearCrash( ){
    for( var i=0; i<props.length; ++i ){
        if( airPlan.hited || !crash( airPlan, props[i] )  ){
            continue
        }else{
            if( props[i].type==1 ){//双排子弹
                airPlan.armType = 1
                //清除的是之前的
                clearTimeout(timeOver)
                //5秒之后飞机子弹重置，变为单排
                var timeOver = setTimeout( function(){
                    airPlan.armType = 0
                },5000 )
            }else{//所有敌机爆炸
                for( var j=0; j<enemies.length; ++j ){
                    enemies[j].hited = true
                }
                musics[2].play()
            }
            props[i].used = true
        }
    }
    
    //子弹击中敌机
    for( var i=0; i<enemies.length; ++i ){
       for( var j=0; j<airPlan.bullets.length; ++j ){
            if( airPlan.hited || !crash( enemies[i], airPlan.bullets[j] )  ){
                continue
            }else{
                enemies[i].hp = enemies[i].hp - airPlan.bullets[j].hurt
                if( enemies[i].hp <=0 ){
                    if( enemies[i].value==10 ){
                        musics[1].play()
                    }else if( enemies[i].value==20 ){
                        musics[3].play()
                    }else{
                        musics[2].play()
                    }
                    enemies[i].hited = true
                }
                airPlan.bullets.splice(j,1)
                --j
            }  
       }
    }
    
    //敌机和我机
    for( var i=0; i<enemies.length; ++i ){
        if( enemies[i].hited || !crash( enemies[i],airPlan )|| airPlan.hited ){
            continue
        }else{
            airPlan.hited = true
            enemies[i].hited = true
            musics[2].play()
        }
    }
}