import { ASSET, SCENE, SPRITE } from '../constants'
import { addPlayer } from '../gameobjects'

scene(SCENE.GAME, () => {
  addTiledMap(ASSET.LEVEL, {
    sprite: SPRITE.TILESET,
    objects: [
      {
        match: { properties: { collides: true } },
        comps: ({ objectSize }) => [
          area({
            shape: new Rect(vec2(), objectSize.width, objectSize.height),
          }),
          body({ isStatic: true }),
        ],
      },
    ],
  })

  addPlayer()
})
