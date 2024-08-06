import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <>
           <nav> 
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/contactsPage">Address Book</Link>
                <Link to="/order">Order</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/message">Message</Link>
                <Link to="/joke">Joke API</Link>
            </nav>
        </>
    )
}

export default Navigation;