window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    createCar();
  };
};

function createBackground() {
  // Degfines the Background
  var canvas = document.getElementById("canvasCarBackground");
  var ctx = canvas.getContext("2d");

  // Defines the Grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 40, 600);
  ctx.fillRect(460, 0, 40, 600);

  //Defines the road
  ctx.fillStyle = "grey";
  ctx.fillRect(40, 0, 420, 600);

  //Defines the road lines
  ctx.fillStyle = "white";
  ctx.fillRect(55, 0, 10, 600);
  ctx.fillRect(435, 0, 10, 600);

  ctx.fillRect(245, 10, 10, 30);
  ctx.fillRect(245, 70, 10, 30);
  ctx.fillRect(245, 130, 10, 30);
  ctx.fillRect(245, 190, 10, 30);
  ctx.fillRect(245, 250, 10, 30);
  ctx.fillRect(245, 310, 10, 30);
  ctx.fillRect(245, 370, 10, 30);
  ctx.fillRect(245, 430, 10, 30);
  ctx.fillRect(245, 490, 10, 30);
  ctx.fillRect(245, 550, 10, 30);
}

function startGame() {
  createBackground();
}

function createCar() {
  let canvas = document.getElementById("canvasCarBackground");
  let ctx = canvas.getContext("2d");

  let car = {
    x: 250,
    y: 520,
    moveLeft: function() {
      if (this.x < 470 && this.x > 25) {
        this.x -= 25;
      }
    },
    moveRight: function() {
      if (this.x < 445 && this.x > 0) {
        this.x += 25;
      }
    }
  };

  function draw(car) {
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, car.x, car.y, 40, 70);
    };
    img.src = "/starter_code/images/car.png";
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        car.moveLeft();
        console.log("left", car);
        break;
      case 39:
        car.moveRight();
        console.log("right", car);
        break;
    }
    updateCanvas();
  };

  function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.fillText("car_x: " + car.x, 580, 40);
    ctx.fillText("car_y: " + car.y, 580, 60);
    draw(car);
    createBackground();
  }
  updateCanvas();
}
