import italyFlag from './assets/italy-flag.svg'

function Header() {
    return (
        <div>
            <img src={italyFlag} className="logo" alt="Italy flag" width={100} />
        </div>
    )
}

export default Header;