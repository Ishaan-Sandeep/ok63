Lsquare = 0
lwrist = 0
rwrist = 0
noseX = 0
noseY = 0
function setup() {
  canvas = createCanvas(350,350)
  canvas.position(560,150)
  video = createCapture(VIDEO)
  video.size(350,350)
  posiffier = ml5.poseNet(video,modelLoaded)
  posiffier.on('pose',gotResults)
}
function gotResults(results) {
  if(results.length > 0) {
   console.log(results)
   noseX = results[0].pose.nose.x
   noseY = results[0].pose.nose.y 
   Lwrist = results[0].pose.leftWrist.x
   Rwrist = results[0].pose.rightWrist.x
   Lsquare = floor(Lwrist - Rwrist)
  }
 } 
function draw() {
  background("lightgoldenrodyellow")
  fill("#00ff00")
  stroke("#0000ff")
  square(noseX,noseY,Lsquare)
}
function modelLoaded() {
  console.log("Model Is Loaded!")
}

