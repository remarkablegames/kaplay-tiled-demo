import { TAG } from '../constants'
import type { Player } from '../types'

export function getPlayer() {
  return get(TAG.PLAYER)[0] as Player
}
