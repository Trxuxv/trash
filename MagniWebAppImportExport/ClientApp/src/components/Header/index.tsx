import iconSearch from '../../assets/images/icon-search.svg'
import iconView from '../../assets/images/icon-view.svg'
import iconHelp from '../../assets/images/icon-help.svg'
import { useContext, useState } from 'react'

interface HeaderProps {
    page: string
    title: string
}

export default function Header({ page, title }: HeaderProps) {
    const [viewAccountValue, setViewAccountValue] = useState(false)
    const [isOpenCreateNew, setIsOpenCreateNew] = useState(false)

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <header
            className={`header ${showMobileMenu ? 'show-mobile-menu' : 'absolute w-full shadow-md'}`}
        >
            <h1>
                <span className="icon icon-home"></span>
                {title}
            </h1>
            <div className="total-registers"></div>
            <div className="bank-sync">
            </div>
            <div className="create-new">
                <a
                    href="#"
                    className="create-new__wrapper"
                    onClick={() => setIsOpenCreateNew(!isOpenCreateNew)}
                >
                    <span className="icon icon-plus"></span>
                    <span className="create-new__wrapper--content">
                        Criar novo
                    </span>
                </a>
                <div
                    className={`create-new__box ${
                        isOpenCreateNew ? 'active' : ''
                    }`}
                >
                    <ul>
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsOpenCreateNew(false)}
                            >
                                <span className="icon icon-upload"></span>
                                <span>Documento</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsOpenCreateNew(false)}
                            >
                                <span className="icon icon-card"></span>
                                <span>Movimento</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="search">
                <img src={iconSearch} alt="Search" title="Search" />
            </div>
            <div
                className="view-account-value"
                onClick={() => setViewAccountValue(!viewAccountValue)}
            >
                <img src={iconView} alt="View account" title="View Account" />
            </div>
            <div className="account">
                <span className="icon icon-euro"></span>
                <div
                    className={`${
                        viewAccountValue ? 'value' : 'blocked-value'
                    }`}
                >
                    <div>
                        <span>300</span>.<span>00</span>
                    </div>
                    <div>
                        <span></span>.<span></span>
                    </div>
                </div>
            </div>

            <a href="/" className="help">
                <img src={iconHelp} alt="Help" title="Help" />
            </a>

            <div className="mobile-menu">
                {!showMobileMenu && (
                    <span
                        className="icon icon-menu"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    ></span>
                )}
                {showMobileMenu && (
                    <span
                        className="icon icon-close"
                        onClick={() => setShowMobileMenu(false)}
                    ></span>
                )}
            </div>
        </header>
    )
}
