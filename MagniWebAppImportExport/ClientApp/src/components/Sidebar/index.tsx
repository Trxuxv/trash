import { useState } from 'react'
import logoEmpresa from '../../assets/images/logo-petrobras.png'

export default function Sidebar() {
    const [minifiedMenu, setMinifiedMenu] = useState(true)

    return (
        <aside className={`sidebar ${minifiedMenu ? 'minified' : ''}`}>
            <div
                className="sidebar__logo"
                onClick={() => setMinifiedMenu(!minifiedMenu)}
            >
                <a href="#" className="sidebar__logo--image"></a>
            </div>
            <div className="sidebar__company">
                <div className="sidebar__company--wrapper">
                    <figure className="sidebar__company--wrapper-image">
                        <img src={logoEmpresa} alt="" title="" />
                    </figure>
                    <div className="sidebar__company--wrapper-content">
                        <span className="company-name">Petrobrás lda</span>
                        <a href="/">Trocar empresa</a>
                    </div>
                </div>
            </div>
            <div className="sidebar__menu">
                <nav>
                    <a href="/">
                        <span className="icon icon-home"></span>
                        <span>Home</span>
                    </a>
                </nav>
            </div>
            <div className="sidebar__menu">
                <a href="/">
                    <span className="icon icon-configuracoes"></span>
                    <span>Configurações</span>
                </a>
            </div>
        </aside>
    )
}
