import { AuthContext } from './Security/AuthContext'
import { useContext } from 'react'

export default function FooterComponent() {

    const authContext = useContext(AuthContext)

    console.log(`Footer Component - ${authContext.number}`);

    return (
        <footer className="footer">
            <div className="container">
                Footer
            </div>
        </footer>
    )
}