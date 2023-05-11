import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Importation from '../Importation';

export default function Home() {
    return (
        <div className="main-content">
            <Sidebar />
            <div className="main-content__content h-min relative min-h-screen">
                <Header page="home" title="Início" />
                <Importation/>
            </div>
        </div>
    )
}