import { useState } from 'react'

export default function SearchItems() {
    const [inputSearch, setInputSearch] = useState('')
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)

    const handleTypeSearch = (e: any) => {
        e.preventDefault()
        setInputSearch(e.target.value)
        if (e.target.value.length > 3) {
            setIsOpenSearchBox(true)
        } else {
            setIsOpenSearchBox(false)
        }
    }

    const closeSearchBox = () => {
        setInputSearch('')
        setIsOpenSearchBox(false)
    }

    return (
        <div className="search">
            <span className="icon icon-plus"></span>
            <div>
                <input
                    type="search"
                    name="search"
                    placeholder="Buscar documento à reconciliar (título, descrição)"
                    onChange={handleTypeSearch}
                    value={inputSearch}
                    className="search-input"
                />
            </div>
            <div className={`search__box ${isOpenSearchBox ? 'active' : ''}`}>
                <div className="search__box--header">
                    <div>
                        <span className="icon icon-plus"></span>
                    </div>
                    <div>
                        <input
                            type="search"
                            name="search"
                            placeholder="Buscar documento à reconciliar (título, descrição)"
                            onChange={handleTypeSearch}
                            value={inputSearch}
                            className="search-input"
                        />
                    </div>
                    <div>
                        <div className="form-group">
                            <input
                                type="date"
                                name="data"
                                id="data"
                                placeholder="Data"
                            />
                            <span className="icon icon-date"></span>
                        </div>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="valor"
                            id="valor"
                            placeholder="€ Valor"
                            value=""
                            className="align-right"
                        />
                    </div>

                    <div>
                        <label className="filter">Todos</label>
                    </div>

                    <div>
                        <label>Reconciliar</label>
                    </div>
                </div>
                <div className="search__box--content">
                </div>
                <div className="search__box--footer">
                    <a
                        href="#"
                        className="btn btn-secondary"
                        onClick={closeSearchBox}
                    >
                        Cancel
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => setIsOpenSearchBox(false)}
                    >
                        <span className="icon icon-reconciliacoes"></span>
                        Associar transferência
                    </a>
                </div>
            </div>
        </div>
    )
}
