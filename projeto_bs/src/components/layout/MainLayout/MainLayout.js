import style from './MainLayout.module.css';

import Navbar from '../Navbar/Navbar';
import PainelLateral from '../PainelLateral/PainelLateral';
import Footer from '../Footer/Footer';

function MainLayout({ children }) {
  return (
    <div className={style.layout}>
      
      <header className={style.navbar}>
        <Navbar />
      </header>

      <aside className={style.sidebar}>
        <PainelLateral />
      </aside>

      <main className={style.content}>
        {children}
      </main>

      <footer className={style.footer}>
        <Footer />
      </footer>

    </div>
  );
}

export default MainLayout;