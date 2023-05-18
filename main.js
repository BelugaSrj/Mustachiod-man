




mustacheX=0;
mustacheY=0;

function preload() {
    mustache = loadImage('image.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image (video, 0, 0, 300, 300);
    image(mustache-nose, noseX-10, noseY-10, 20, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.mustache.x;
        noseY = results[0].pose.mustache.y;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
}