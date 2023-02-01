import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="keyworkds" content="Roupas, calçados, boné"></meta>
        <meta name="description" content="Encontre a melhor roupa para você."></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World!</h1>
      </div>
    </>
    
  )
}
