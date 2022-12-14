import { NavLink } from "react-router-dom"

const navigation = [
    {
        id: '1',
        title: 'Корзина',
        to: 'basket'
    },
    {
        id: '2',
        title: 'Заказы',
        to: 'orders'
    },

    {
        id: '3',
        title: 'Избранное',
        to: 'favourite'
    },

    {
        id: '4',
        title: 'Войти',
        to: 'auth'
    },


]

const Header = () => {
    return (
        <header className="header">
            <span><NavLink to='products'>Logo</NavLink></span>
            <form action="" method="get">
                <input className="header-input" name="s" placeholder="Искать здесь..." type="search" />
                <button className="header-button" type="submit"></button>
            </form>
            <nav className="nav">
                <ul className="nav-ul">
                    {navigation.map(({id, title, to}) => <NavLink to={to} key={id} className="nav-li">{title}</NavLink>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header