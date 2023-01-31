import Link from 'next/link'

function About() {
    return (
        <>
            <h1>Página de About</h1>
            <Link href="/" passHref>Voltar</Link>
        </>
        
    )
}

export default About