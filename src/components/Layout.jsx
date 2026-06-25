import React from 'react'
import Navigation from './Navigation'
import Footer from '../sections/Footer'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f3efe9]">
      <Navigation />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
