
    var sound = new Howl({
      urls: ['Assets/bubbles.mp3']
    });
    
    var circles = [];
    
    function onKeyDown(event) {
        sound.play();
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500)
        newCircle.fillColor = "orange";
        circles.push(newCircle);
        
        function onFrame(event) {
        animatedCircle.fillColor.hue += 1;
        animatedCircle.scale(.9);
    }
    }
    
    function onFrame(event) {
    for(var i=0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
        }
    }