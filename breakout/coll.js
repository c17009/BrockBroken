const canvas = document.getElementById("display");
const ctx = canvas.getContext("2d");
const FPS = 1000 / 60;
const ANGLE360 = Math.PI * 2;

class Block{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx){
        ctx.save();

        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill();

        ctx.restore();
    }
}

class Ball{
    constructor(x,y,speed,angle,color){
        this.x = x;
        this.y = y;
        const rad = Math.PI * angle / 180;
        this.vx = Math.cos(rad)*speed;
        this.vy = Math.sin(rad)*speed;
        this.color = color;
        this.collisionPoint = [
            [5,0],  //0
            [Math.cos(Math.PI / 6) * 5, Math.sin(Math.PI / 6) * 5],  // 30
            [Math.cos(Math.PI / 3) * 5, Math.sin(Math.PI / 3) * 5],  // 60
            [0, 5],  // 90
            [Math.cos(Math.PI * 2 / 3) * 5, Math.sin(Math.PI * 2 / 3) * 5],  // 120
            [Math.cos(Math.PI * 5 / 6) * 5, Math.sin(Math.PI * 5 / 6) * 5],  // 150
            [-5, 0],  // 180
            [Math.cos(Math.PI * 7 / 6) * 5, Math.sin(Math.PI * 7 / 6) * 5],  // 210
            [Math.cos(Math.PI * 4 / 3) * 5, Math.sin(Math.PI * 4 / 3) * 5],  // 240
            [0, -5],  // 270
            [Math.cos(Math.PI * 5 / 3) * 5, Math.sin(Math.PI * 5 / 3) * 5],  // 300
            [Math.cos(Math.PI * 11 / 6) * 5, Math.sin(Math.PI * 11 / 6) * 5]  // 330
        ]
    }
}