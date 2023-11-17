function setup() 
{
    canvas = createCanvas(600, 500)
    canvas.position(850, 84)

    video = createCapture(VIDEO)
    video.size(400,300)

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotPoses)
}
function modelloaded() 
{
    console.log("Model Is Loaded")
}
function gotPoses(result) 
{
    if (result.length > 0) 
    {
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y

        leftWristX = result[0].pose.leftWrist.x
        rightWristX = result[0].pose.rightWrist.x

        difference = floor(leftWristX - rightWristX)
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX)
    }
}