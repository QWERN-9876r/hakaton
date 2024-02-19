import styles from './page.module.css'
import { FunctionComponent } from 'react'
import { Footer } from '@/components/footer/footer'
import { MainComponent } from './mainComponent'

const Home: FunctionComponent = () => {
    return (
        <>
            <main className={styles.main}>
                <MainComponent />
            </main>
            <Footer />
        </>
    )
}

export default Home
