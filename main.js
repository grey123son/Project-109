function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});

}    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Y1EK7kDyV/model.json', modelReady());
    function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("answer").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";


        if (results[0].label == "Cat") {
            img.src = 'Cat.jpg';
        } else if (results[0].label == "Dog") {
            img.src = 'Dob.webp';
        }else {
            img.src = 'download.png';
        }
    };
}