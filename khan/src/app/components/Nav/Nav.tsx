import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div>
        <header>
            <Link href="/"> Home</Link>
            <Link href="/address" > address</Link>
            <Link href="/address/name" > name</Link>
            <Link href="address/name/contact-us/" >contact-us</Link>
        
        </header>
    </div>
  )
}

export default Nav