import React from 'react';
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <>
           <Link href='/'> Home</Link> 
           <Link href='/about'> About</Link> 
           {children}
        </>
    )
}

export default Layout
