import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import CrewPage from './pages/CrewPage'
import DestinationPage from './pages/DestinationPage'
import TechPage from './pages/TechPage'
import { Route } from 'wouter'

function App () {
  return (
    // con react wouter probá en hacer esto: https://chat.openai.com/c/7e3ecd95-1f76-4aae-bee0-c343590377ee (paso 2)
    <div className='min-h-screen bg-fixed bg-cover'>
      <Nav />
      <Route path='/' exact component={HomePage} />
      <Route path='/destination' exact component={DestinationPage} />
      <Route path='/crew' exact component={CrewPage} />
      <Route path='/technology' exact component={TechPage} />
    </div>

  )
}

export default App
