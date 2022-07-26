Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,
});
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML="<img id='imgdata' src='"+data_uri+"'>"
    })
}
Webcam.attach("#webcam1");
classify1 = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0y2eTW1M5/model.json",modelLoaded)
function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    data=document.getElementById("imgdata");
    classify1.classify(data,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
        objects=results[0].label;
        accs=results[0].confidence.toFixed(3);
        document.getElementById("object1").innerHTML="Person: "+objects;
        document.getElementById("acc1").innerHTML="Accuracy: "+accs;
    }
}
