import PropTypes from 'prop-types'
import Button from './Button'
import {IoIosAddCircle, IoIosCloseCircle} from 'react-icons/io'

const Header = ({title, onAdd, show}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} color={show ? 'red' : 'green'} text={show ?  <IoIosCloseCircle/> : <IoIosAddCircle/>}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
    onAdd: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default Header
