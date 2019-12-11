import React from 'react'
import { Pane } from '../../components/Pane'


const mockData = [
  { id: 1, project: 'Potato Salad' },
  { id: 2, project: 'Tomato Soup' },
  { id: 3, project: 'A Brick' }
]

export const MyApps = () => (
  <div>
    <Pane>
      <h2>MyApps</h2>
    </Pane>

    { mockData.map(({ id, project }) =>
      <Pane key={id}>{project}</Pane>) }

  </div>
)
