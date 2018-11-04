import React from 'react'
// @ts-ignore
const { useState, useMemo } = React

/**
 *
 * @param {string} stateName
 * @param {string} stateUpdaterName
 * @param {any} initialState
 */
const withState = (stateName, stateUpdaterName, initialState) => props => {
  const [state, update] = useState(
    typeof initialState === 'function'
      ? useMemo(() => initialState(props), [])
      : initialState
  )

  return {
    ...props,
    [stateName]: state,
    [stateUpdaterName]: update,
  }
}

export default withState
