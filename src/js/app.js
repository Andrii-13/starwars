import { Application, Assets, Container, Sprite } from 'pixi.js';

(async () =>
    
{
    // Create a new application
    const app = new Application();

    console.log(app)

    // Initialize the application
    await app.init({ background: "grey", width:1280 , height:720 });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Load the background texture
    const spaceTexture = await Assets.load('/public/img/spase-bcg.png');

    // Create a sprite for the background
    const background = new Sprite(spaceTexture);

    // Resize the background to fit the canvas
    background.width = app.screen.width;
    background.height = app.screen.height;

    // Add the background to the stage (додаємо його першим, щоб він був позаду)
    app.stage.addChild(background);


    // Create and add a container to the stage
    const container = new Container();

    app.stage.addChild(container);

    // Load the bunny texture
    const texture = await Assets.load('/public/space-shooter-extension/PNG/Sprites X2/Ships/spaceShips_009.png');

      const spaceShip = new Sprite(texture);
      spaceShip.scale.set(0.5); // Зменшує розмір по обох осях

        container.addChild(spaceShip);
    // }

    // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height - (app.screen.height * 0.02) // Відступ 2% знизу

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height;
  
})();
