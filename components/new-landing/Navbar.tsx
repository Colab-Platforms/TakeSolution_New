import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  const Navbar = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About Us",
      path: "/about-us"
    },
    {
      name: "Investors",
      path: "/investors"
    },
    {
      name: "Innovation Fund",
      path: "/innovation-fund"
    }
  ]
  return (
    <nav className='z-9999 relative'>
        <div className='container mx-auto flex items-center justify-between h-20'>
          <div>
            <Image
                src="/new-landing/logo.png"
                alt="logo"
                width={170}
                height={65}
            />
        </div>
        <div>
          <ul className='flex gap-8 items-center justify-center'>
          {Navbar.map((item,index) => (
            <Link key={index} href={item.path} className='font-landing-title text-lg text-white'>
              <li>{item.name}</li>
            </Link>
          ))}
          </ul>
        </div>
        <div>
          <Link href="" className='font-landing-title font-md border-2 border-white text-white px-8 py-3 rounded-lg'>
            Contact Us
          </Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar