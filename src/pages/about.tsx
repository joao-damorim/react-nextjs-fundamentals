import Navbar from '@/components/Navbar'
import Link from 'next/link'

function About() {
    return (
        <>
            <Navbar />
            <h1>Página de About</h1>
            <Link href="/" passHref>Voltar</Link>
        </>
        
    )
}

export default About