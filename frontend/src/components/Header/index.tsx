import logo from '../../assets/img/logo-DSMeta.svg'
import './styles.css'

function Header() {
   return (
      <>
         <header>
            <div className="logo-container">
               <img src={logo} alt="logo DSMeta"/>
                  <h1>DSMeta</h1>
                  <p>Desenvolvido por
                     <a href="https://www.instagram.com/mizumi._/" target="_blank">
                        @mizumi._
                     </a>
                  </p>
            </div>
         </header>
      </>
   )
}

export default Header