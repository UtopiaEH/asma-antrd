import { useState } from 'react'
import './styles/index.scss'
import { RdButton } from 'asma-antrd'
import { Topbar } from './components/layout-components/topbar/Topbar'
import { Sidebar } from './components/layout-components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { SelectModule } from './modules/select/SelectModule'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Topbar />
            <div className="flex w-full h-[calc(100%-var(--top-bar-height))]">
                <Sidebar />
                <div className="flex flex-auto bg-gray-100 w-full h-full overflow-auto p-4">
                    <Routes>
                        <Route path={'/sidebar'} element={<SelectModule />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
