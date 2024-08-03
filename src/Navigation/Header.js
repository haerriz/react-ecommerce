import '../Styles/header.css';

const Header = () => {
    const LogoStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
    }
    return (
        <>
            <div className="logo">
                <a href="/"><img alt="Haerriz" style={LogoStyle} src="https://haerriz.com/img/profile.jpg"/></a>
                <p>This is a Header</p>
            </div>
        </>
    )
}
export default Header;