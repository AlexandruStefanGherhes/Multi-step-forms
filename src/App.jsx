import { AddonProvider } from './contexts/addonContext'
import { PlanProvider } from './contexts/planContext'
import { CounterContextProvider } from './contexts/counteContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Sidebar } from './components/sidebar'
import Info from './pages/info'
import Plan from './pages/plan'
import Addon from './pages/addon'
import Summary from './pages/summary'
import Thanks from './pages/thanks'
import './App.css'

function App() {
  return (
    <PlanProvider>
      <AddonProvider>
        <CounterContextProvider>
        <BrowserRouter>
          <div className="bg-white sm:w-[60rem] sm:h-[35rem] sm:mb-0 sm:mt-0 rounded-md shadow-md p-6 flex flex-col sm:flex sm:flex-row justify-between">
            <Sidebar />
            <Routes>
              <Route path='/' element={<Info/>}/>
              <Route path='/plan' element={<Plan/>}/>
              <Route path='/addon' element={<Addon/>}/>
              <Route path='/summary' element={<Summary/>}/>
              <Route path='/thanks' element={<Thanks/>}/>
            </Routes>
          </div>
        </BrowserRouter>
        </CounterContextProvider>
      </AddonProvider>
    </PlanProvider>
  )
}

export default App
