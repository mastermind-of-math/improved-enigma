
var canvas = new fabric.Canvas("myCanvas")

//Set initial positions for ball and hole images.
ballx = 0
bally = 0
holex = 400
holey = 800

block_image_width = 5;
block_image_height = 5;

function load_img(){
    fabric.Image.fromURL("ball.png", function(Img){
        holeobject = Img;

        holeobject.scaleToWidth(block_image_width);
        holeobject.scaleToHeight(block_image_height);
        holeobject.set({
            top:holey,
            left:holex
        });
        canvas.add(ballobject)
    });
	new_image();
}

function new_image(){
    fabric.Image.fromURL("ball.png", function(Img){
        ballobject = Img;

        ballobject.scaleToWidth(block_image_width);
        ballobject.scaleToHeight(block_image_height);
        ballobject.set({
            top:bally,
            left:ballx
        });
        canvas.add(ballobject)
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if(ballx == holex && bally == holey){
    document.getElementById("hd3").innerHTML = "you have hit the goal"
    document.getElementById("myCanvas").style.borderColor = 'red'
}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
        if(ball_y <=650)
		{
            bally = bally + 20;
            console.log("x position = " + ballx + ", y position = " + bally);
            canvas.remove(ballobject);
            new_image()
		}
	}

	function down()
	{
        if(ball_y >5)
		{
            bally = bally - 20;
            console.log("x position = " + ballx + ", y position = " + bally);
            canvas.remove(ballobject);
            new_image()
		}
		}
	}

	function left()
	{
		if(ball_x >5)
		{
            ballx = ballx - 20;
            console.log("x position = " + ballx + ", y position = " + bally);
            canvas.remove(ballobject);
            new_image()
		}
		}

	function right()
	{
		if(ball_x <=850)
		{
            ballx = ballx + 20;
            console.log("x position = " + ballx + ", y position = " + bally);
            canvas.remove(ballobject);
            new_image()
		}
		}
