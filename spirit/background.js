var background_img = new Image()
background_img.src = "image/background.png"

var background = {
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height,
    
    draw: function( ){
        imgWidth = background_img.width
        imgHeight = background_img.height
        
        var col = Math.ceil( canvas.width/imgWidth )
        var row = Math.ceil( canvas.height/imgHeight )
        
        for( var i=-row; i<row; ++i ){
            for( var j=0; j<col; ++j ){
                context.drawImage( background_img,imgWidth*j,imgHeight*i+this.y )    
            }
        }
    },
    
    move: function( ){
        this.y++
        var row = Math.ceil( canvas.height/imgHeight )
        if( this.y == row*imgHeight){
            this.y = 0
        }
    },
    
}
