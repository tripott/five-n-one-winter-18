import { setColors } from './colors'
import { SET_COLORS } from '../constants'

test('testing SET_COLORS', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_COLORS)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setColors(mockDispatch)
})
