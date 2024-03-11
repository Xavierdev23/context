import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export function Product() {

    const list = [
        {
            id: 402,
            title: "product 1",
            category: "product",
            date: Date.now()
        }
    ]

    const { isOpen, setIsOpen } = useContext(GlobalContext)
    return (
        <div>
            {isOpen ? (
                <ul>
                    {list.map((item) => (
                        <>
                            <li>{item.id}</li>
                            <li>{item.title}</li>
                            <li>{item.category}</li>
                            <li>{item.date}</li>
                        </>

                    ))}
                </ul>
            ) : <p>Inativo</p>}
            <button type='button' onClick={() => setIsOpen(!isOpen)}>Mudar o estado global</button>
        </div>
    )
}
