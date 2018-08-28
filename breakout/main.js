const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;
const SPF = 1000 / 60;
const PADDLE_SPEED = 5;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 20;
let score = 0;

const input = new Input();
const ball = new Ball(400, 300, 10, 'red');
const paddle = new Paddle(400, 550, 80, 10, 'deepskyblue');
const blocks = [];

function Blockpush() {
    for (let h = 0; h <= 4; h++) {
        for (let v = 0; v <= 7; v++){
            blocks.push(new Block(150 + 70 * v, 50 + 50 * h, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
        }
    }
}

/*blocks.push(new Block(350,50,BLOCK_WIDTH,BLOCK_HEIGHT,"lime"));
blocks.push(new Block(400, 50, BLOCK_WIDTH, BLOCK_HEIGHT, "lime"));
blocks.push(new Block(700,50,BLOCK_WIDTH,BLOCK_HEIGHT,"lime"));*/
Blockpush();
window.setInterval(game_tick, SPF);

function game_tick() {

    // 入力状況に応じた呼び出し
    if (input.space) {
        ball.start(5);
    }
    if (input.left) {
        paddle.move_horizontal(-PADDLE_SPEED);
    }
    if (input.right) {
        paddle.move_horizontal(PADDLE_SPEED);
    }
    if (input.up) {
        paddle.move_vertical(-PADDLE_SPEED * 0.5);
    }
    if (input.down) {
        paddle.move_vertical(PADDLE_SPEED * 0.5);
    }


    // ボールの移動
    ball.move();

    // ボールとブロックの当たり判定
    paddle.collide(ball);
    // ボールとブロックの当たり判定
    blocks_collide();

    // 各種オブジェクトの描画
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    Scoredraw();
    paddle.draw(ctx);
    ball.draw(ctx);
    blocks.forEach((block) => block.draw(ctx));
}

function blocks_collide() {
    for (let i = 0; i < 40; i++){
        if (blocks[i] && blocks[i].collide(ball)) {
            blocks.splice(i, 1);
            score += 100;
        }
    }
}

function Scoredraw() {
    ctx.font = '20px "Arial Black"';
    ctx.fillStyle = '#00aa00';
    ctx.fillText('Score:' + score,10,30);
    if (score >= 4000){
        ctx.font = '80px "Arial Black"';
        ctx.fillStyle = '#aa0000';
        ctx.fillText('Congratulations!!',20,300);
        alert('おめ');
        document.location.reload();

    }
}