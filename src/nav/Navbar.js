import './Navbar.css';
import logo from "../img/bg.jpg"
import logojp from "../img/logo.png"

const navbar = {
    padding: "20px  10px",
    listStyle: "none",

}
const nav = {
    textAligin: "center",
    padding: "20px",

}
function Nav() {
    return (
        <div className="Nav">
            <img style={nav} src={logojp} alt="as"></img>
            <div className="menu">
                <a href="#!"> Жилые комплексы</a>
                <a href="#!">О компании</a>
                <a href="#!">Контакты</a>
                <a href="#!">Новости</a>
                <a href="#!">Акции</a>
                <a href="#!">Преимущества</a>
            </div>
            <li style={navbar} />
            <img src={logo} alt="jpg"></img>

        </div>
    );
}

export default Nav;