import { SPRITE } from '../constants'
import { addCursorKeys } from '../events'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(SPRITE.BEAN),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    body(),
    z(1),
  ])

  addCursorKeys(player)

  player.onUpdate(() => {
    setCamPos(player.pos)
  })

  return player
}
