import Link from 'next/link'

import Head from 'next/head'

function Empresa() {
    return (
        <>
            <Head>
                <title>Empresa</title>
            </Head>
            <h1>Empresa</h1>
            <Link href="/" passHref>Voltar</Link>
        </>
        
    )
}

export default Empresa