import logo from '../../assets/investment-calculator-logo.png';
import classes from './header.module.css';

function Header(props) {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>);
}

export default Header;