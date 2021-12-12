import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {

    const location = useLocation()

    return (
        <header className='header'>
            
            <h1 style = {{color: 'salmon'}}>{title}</h1>
            {location.pathname === "/" && (
            <Button
            color={showAdd ? 'Red' : 'Green'} 
            text = {showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}/>
            )}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Food ever exested',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//const headingStyle = {
//    color: 'red'
//}

export default Header
