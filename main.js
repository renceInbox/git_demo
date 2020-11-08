function toggleTextColor(){
    // we just add a class here to its already existing list of classes
    // we use toggle so that it will be remove in the 2nd click
    document.getElementById('changeColorElement').classList.toggle('text-green')
}
function calculateEarthSpeed(){
    // `var` is use to declare variables. `let` declares a variable that we can change the value later
    // `const` declares a variable but cannot change the value later
    let age = document.getElementById('idAge').value;
    let mountainCount = document.getElementById('idMountain').value;
    let earthSpeed = Math.sqrt(age) * Math.sqrt(mountainCount);
    document.getElementById('earthSpeedElement').innerHTML = earthSpeed;
}
