import Navbar from '@/components/Navbar'
import Link from 'next/link'

function Products() {
    return (
        <>
            <Navbar />
            <h1>Página de Produtos</h1>
            <Link href="/">Voltar</Link>
        </> 
    )
}

export default Products