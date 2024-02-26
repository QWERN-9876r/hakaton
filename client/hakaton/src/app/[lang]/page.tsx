import styles from './page.module.css'
import { FunctionComponent } from 'react'
import { Footer } from '@/components/footer/footer'
import { MainComponent } from './mainComponent'
import { getDictionary } from './dictionaries'

interface Props {
    params: {
        lang: 'en' | 'ru'
    }
}

const Home: FunctionComponent<Props> = async ({ params: { lang } }) => {
    const dict = await getDictionary(lang)

    return (
        <>
            <main className={styles.main}>
                <MainComponent dict={dict} />
            </main>
            <Footer dict={dict} lang={lang} />
        </>
    )
}

export default Home
