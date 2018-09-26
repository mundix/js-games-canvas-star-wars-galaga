
const ship = new Ship("ship",stageWidth/2,stageHeight);
ship.y = stageHeight - ship.height-borderOffset;
collection.push(ship);
var alienImage = document.getElementById("alien-boss-green-sprite");

// 184x16
const alien = new Alien("alien-boss-green-sprite",
                        // 184-16,0, //cerrado
                        184-40,0,
                        16,16,
                        0,0,
                        160,160);
collection.push(alien);

