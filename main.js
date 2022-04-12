song1 = "";
song2 = "";
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
function preload(){
    song1 = loadSound("angry_birds.mp3");
    song2 = loadSound("spider_man.mp3");
    }
function setup(){
   canvas = createCanvas(350, 350)
    canvas.position(600, 250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}



function draw(){
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
    console.log("LeftWristX = " + leftWristX + " LeftWristY = " + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
    console.log("RightWristX = " + rightWristX + " RightWristY = " + rightWristY);
    }
}