controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 . 
    . . e e e 4 4 e 4 . . . 
    . e 4 e 4 4 4 e 4 4 4 . 
    . e 4 e e 4 4 4 e 4 4 4 
    . e e 4 4 4 4 e e e e . 
    . . . 4 4 4 4 4 4 4 . . 
    . . e e 2 e e e . . . . 
    . e e e 2 e e 2 e e e . 
    e e e e 2 2 2 2 e e e e 
    4 4 e 2 5 2 2 5 2 e 4 4 
    4 4 4 2 2 2 2 2 2 4 4 4 
    4 4 2 2 2 2 2 2 2 2 4 4 
    . . 2 2 2 . . 2 2 2 . . 
    . e e e . . . . e e e . 
    e e e e . . . . e e e e 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    ..................
    .......eeee.......
    ......eeeeee......
    .....eeeeeeee.....
    ....eeeeeeeeee....
    ...effeeeeeeffe...
    ..eee1feeeef1eee..
    ..eee1ffffff1eee..
    .eeee1f1ee1f1eeee.
    .eeee111ee111eeee.
    .eeeeeeeeeeeeeeee.
    ..eeeeddddddeeee..
    .....dddddddd.....
    ...ffddddddddff...
    ..fffffddddfffff..
    ..ffffffddffffff..
    ...fffff..fffff...
    `, SpriteKind.Enemy)
mySprite2.ay = 400
mySprite.ay = 400
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile18`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
while (true) {
    mySprite2.setVelocity(-80, 0)
    pause(1000)
    mySprite2.setVelocity(80, 0)
    pause(1000)
}
