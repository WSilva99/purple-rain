const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
    constructor(x, y, l, xs, ys) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.xs = xs;
        this.ys = ys;
    }

    draw() {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + this.l * this.xs, this.y + this.l * this.ys);
        context.stroke();
    }

    update() {
        this.draw();
        this.x += this.xs;
        this.y += this.ys;
        if (this.x > innerWidth || this.y > innerHeight) {
            this.x = Math.random() * innerWidth;
            this.y = -20;
        }
    }
}

function init(maxParts) {
    for(let i = 0; i < maxParts; i++) {
        rain.push(new Particle(
            Math.random() * innerWidth,
            Math.random() * innerHeight,
            Math.random() * 1,
            Math.random() * 4 - 1,
            Math.random() * 10 + 10,
        ));
    }
}

function animate() {
    context.fillStyle = 'rgba(0, 0, 0, 0.1)';
    context.strokeStyle = 'rgba(88, 24, 69, 1)';
    context.lineWidth = 1.2;
    context.lineCap = 'round';
    context.clearRect(0, 0, innerWidth, innerHeight);
    rain.forEach((r) => {
        r.update();
    });
}

let rain = [];
init(2000);
setInterval(animate, 20);
