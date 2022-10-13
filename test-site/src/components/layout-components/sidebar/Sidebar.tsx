import { NavLink } from 'react-router-dom'

export const Sidebar: React.FC = () => {
    return (
        <div className="bg-white border-r border-gray-400 h-full flex flex-col min-w-[var(--side-bar-width)] w-[var(--side-bar-width)]">
            <NavLink to="sidebar" className={'border-b border-gray-300 p-4 font-nova font-bold text-base text-black'}>
                Sidebar
            </NavLink>
        </div>
    )
}
