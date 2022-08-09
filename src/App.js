import './App.css'
import { Pets } from './ui-components'
import { PetNavBar } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  const navBarOverrides = {
    Button: {
      onClick: () => {
        alert('sign in')
      },
    },
    image: {
      src: 'https://miro.medium.com/max/1200/1*u0Pk-feV2uAMLCfcbXUVDw.jpeg',
    },
  }
  return (
    <div className="App">
      <header className="App-header">
        <PetNavBar overrides={navBarOverrides} />
        <Pets />
      </header>
    </div>
  )
}

export default withAuthenticator(App)
