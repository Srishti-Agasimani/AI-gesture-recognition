noseX= 0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(600,600);

    canvas=createCanvas(550,550);
    canvas.position(800,110);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
     if(results.length > 0) {
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose X = "+ noseX +  " nose Y= " + noseY );

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;

        difference= floor(leftwristX - rightwristX);

        console.log("Left wrist x= " + leftwristX + " Right wrist x= " + rightwristX + " Difference = " + difference );
     }
} 

function draw() {
    background('#EEE1AE');
    document.getElementById("square_side").innerHTML="Width and Height of the square will be " + difference + "px";
    fill('#356CD1');
    stroke('#9E7205 ');
    square(noseX, noseY, difference);
        
}



