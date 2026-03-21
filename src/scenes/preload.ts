import { ASSET, SCENE, SPRITE } from '../constants'

// eslint-disable-next-line @typescript-eslint/no-misused-promises
scene(SCENE.PRELOAD, async () => {
  loadSprite(SPRITE.BEAN, 'sprites/bean.png')
  loadSprite(SPRITE.TILESET, 'tiled/tileset.png')

  await loadJSON(ASSET.LEVEL, 'tiled/level.json')

  go(SCENE.GAME)
})
