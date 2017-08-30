var loading = document.getElementById("loading")

var pic = ["background.png", "bullet1.png", "bullet2.png", "enemy1.png", "enemy2.png", "enemy3.png", "my.png", "loading.gif", "prop.png"]

var music = ["bullet.mp3", "enemy1_down.mp3", "enemy2_down.mp3", "enemy3_down.mp3", "bgm.mp3", "game_over.mp3"]

var imgCount = 0

for( var i=0; i<pic.length; ++i ){
    let img = new Image()
    img.src = "image/" + pic[i]
    img.onload = function( ){
        imgCount++
        if( imgCount == pic.length ){
            loadMusic( )
        }
    }
}

musics = []
var mCount = 0
function loadMusic(){
    for( var i=0; i<music.length; ++i ){
        let m = new Audio()
        m.src = "audio/"+music[i]
        musics.push( m )
        m.onloadedmetadata = function( ){
            mCount++ 
            if( mCount == music.length ){
             loading.style.display = "none"
             musics[4].volume = 0.2
             musics[4].loop = true
             musics[4].play();
           }
       }   
   }  
}