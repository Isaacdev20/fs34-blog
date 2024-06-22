
function Header({children}){
   return (
    <header className='bg-blue-300'>
      <nav className='mx-auto flex items-center justify-between p-6 '>
        {children}
      </nav>
    </header>
    )
}

function HeaderLink ({href,children}){
  return (
    <a href={href} className="font-semibold leading-6 ml-5 text-white">{children}</a>
  )
}

function App() {
  return (
      <>
        <Header>
            <HeaderLink
            href="https://company">
              Company
            </HeaderLink>

            <HeaderLink
            href="https://company">
              Bola
            </HeaderLink>
            
            <HeaderLink
              
            >Comercio</HeaderLink>
          
        </Header>
      </>
    )
}

export default App
