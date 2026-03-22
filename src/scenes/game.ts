import { ASSET, SCENE, SPRITE, TAG } from '../constants'
import { addCursorKeys } from '../events'
import { getPlayer } from '../gameobjects'

scene(SCENE.GAME, () => {
  addTiledMap(ASSET.LEVEL, {
    sprite: SPRITE.TILESET,
    objects: [
      {
        match: { properties: { collides: true } },
        comps: ({ width, height }) => [
          area({
            shape: new Rect(vec2(), width, height),
          }),
          body({ isStatic: true }),
        ],
      },
      {
        match: { name: 'Spawn Point' },
        comps: ({ x, y }) => [
          sprite(SPRITE.BEAN),
          pos(x, y),
          rotate(0),
          anchor('center'),
          area(),
          body(),
          z(1),
          TAG.PLAYER,
        ],
      },
    ],
  })

  const player = getPlayer()

  addCursorKeys(player)

  player.onUpdate(() => {
    setCamPos(player.pos)
  })
})
