import React from 'react'

import Home from './Home'

// eslint-disable-next-line import/prefer-default-export
export class HomeFactory {
  static create() {
    return <Home />
  }
}
