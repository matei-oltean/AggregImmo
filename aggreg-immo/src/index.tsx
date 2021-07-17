import ReactDOM from 'react-dom'

import { initializeIcons } from '@fluentui/react';

import App from './App'
import { register } from './serviceWorkerRegistration';

initializeIcons()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

register()