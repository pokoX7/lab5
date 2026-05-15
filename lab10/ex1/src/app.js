const PIXI = require('pixi.js');

const app = new PIXI.Application();

app.init({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
}).then(() => {
    document.body.appendChild(app.canvas);
    
    const rectangle = new PIXI.Graphics();
    rectangle.rect(0, 0, 200, 100);
    rectangle.fill(0xFF0000);
    
    rectangle.x = 300;
    rectangle.y = 250;
    
    app.stage.addChild(rectangle);
    
    app.ticker.add(() => {
        rectangle.rotation += 0.02;
    });
});