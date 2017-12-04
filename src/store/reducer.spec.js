import expect from 'expect'
import reducer from './reducer'
import * as actions from './actions'

const initialState = {
  docked: false,
  responsive: true,
  open: false,
  searching: false
}

describe('locale reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should not affect state', () => {
    expect(
      reducer(initialState, { type: 'NOT_EXISTING' })
    ).toEqual(initialState)
  })

  it('should handle toggleDrawerOpen', () => {
    expect(
      reducer(initialState, actions.toggleDrawerOpen(true))
    ).toEqual({ ...initialState, open: true })
  })

  it('should handle toggleDrawerDock', () => {
    expect(
      reducer(initialState, actions.toggleDrawerDock(true))
    ).toEqual({ ...initialState, docked: true })
  })

  it('should handle setDrawerOpen', () => {
    expect(
      reducer(initialState, actions.setDrawerOpen(true))
    ).toEqual({ ...initialState, open: true })
  })

  it('should handle setResponsive', () => {
    expect(
      reducer(initialState, actions.setResponsive(true))
    ).toEqual({ ...initialState, responsive: true })
  })
})
