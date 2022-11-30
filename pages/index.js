import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import FileSelector from '../components/FileSelector';
import Control from '../components/Control';
import WaveForm from '../components/WaveForm';
export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className='content-wrapper'>
        <div className='selector-control'>
          <FileSelector />
          <Control />
        </div>
        <WaveForm/>

      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
