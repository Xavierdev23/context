import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export  function Product() {
    const {isOpen, setIsOpen} = useContext(GlobalContext)
  return (
    <div>
        { isOpen ? <p>Ativo</p> : <p>Inativo</p>  }
        <button type='button' onClick={() => setIsOpen(!isOpen)}>Mudar o estado global</button>
    </div>
  )
}
