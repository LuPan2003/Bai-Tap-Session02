import React from 'react'
import Header from '../Header'
import Branding from '../Branding'
import Mainmenu from '../Mainmenu'
import Footer from '../Footer'
import Listproduct from '../Listproduct'

function HomePage() {
  return (
    <>
    {/* Header  */}
    <Header></Header>
    {/* End header area */}

    {/* End site branding area */}
    <Branding></Branding>
    {/* End mainmenu area */}
    <Mainmenu></Mainmenu>
    {/* List product */}
    <div className="single-product-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div className="row">
          
        
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
           <Listproduct></Listproduct>
        
        </div>
      </div>
    </div>
    {/* Footer area */}
    <Footer></Footer>
    {/* Latest jQuery form server */}
    {/* Bootstrap JS form CDN */}
    {/* jQuery sticky menu */}
    {/* jQuery easing */}
    {/* Main Script */}
  </>
  
  )
}

export default HomePage
