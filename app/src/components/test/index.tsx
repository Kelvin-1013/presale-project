import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700">
            <Head>
                <title>Cryptocurrency Landing Page</title>
                <meta name="description" content="Digital currency trading platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header className="p-2 text-white bg-green-800">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex space-x-4">
            <CryptoPrice name="IOTA" price={0.01} change={-3} />
            <CryptoPrice name="MNR" price={1.45} change={8} />
            <CryptoPrice name="BYC" price={22.34} change={-3} />
          </div>
        </div>
      </header> */}

            <nav className="p-4 text-white bg-green-700">
                <div className="container flex items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <Image src="/images/BonkLogo.png" alt="Logo" width={40} height={40} className="mr-2" />
                        <span className="text-2xl font-bold">LU</span>
                    </div>
                    <div className="hidden space-x-4 md:flex">
                        <NavLink href="#feature">Feature</NavLink>
                        <NavLink href="#benefit">Benefit</NavLink>
                        <NavLink href="#testimonials">Testimonials</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Link href="/login" className="px-4 py-2 text-white hover:text-green-200">LOG IN</Link>
                        <Link href="/register" className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">REGISTER</Link>
                        <button className="p-2 bg-green-600 rounded">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="container px-4 mx-auto mt-16">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:w-1/2">
                        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                            Digital currency leads at market in the right amount.
                        </h1>
                        <p className="mb-8 text-xl text-green-100">
                            This international trading platform provides innovative tokens a more streamlined approach.
                        </p>
                        <div className="space-x-4">
                            <button className="px-6 py-3 text-white transition duration-300 bg-orange-500 rounded-full hover:bg-orange-600">
                                GET STARTED
                            </button>
                            <button className="px-6 py-3 text-white transition duration-300 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-green-700">
                                VIEW MARKET
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 md:w-1/2 md:mt-0">
                        <Image src="/crypto-illustration.png" alt="Cryptocurrency Illustration" width={500} height={500} />
                    </div>
                </div>
            </main>
        </div>
    )
}

function CryptoPrice({ name, price, change }) {
    const changeColor = change >= 0 ? 'text-green-300' : 'text-red-300'
    const changeIcon = change >= 0 ? '▲' : '▼'

    return (
        <div className="flex items-center space-x-1">
            <span className="font-bold">{name}</span>
            <span>${price.toFixed(2)}</span>
            <span className={`${changeColor}`}>
                ({changeIcon}{Math.abs(change)}%)
            </span>
        </div>
    )
}

function NavLink({ href, children }) {
    return (
        <Link href={href} className="transition duration-300 hover:text-green-200">
            {children}
        </Link>
    )
}