import Link from 'next/link'
const Header = () => {
  return (
    <div className="header-section">
      <div className="header-logo">
        <img src='images/logo.jpg' alt="logo-img" />
      </div>
      <div className='header-item'> 
        <Link href='/features'>Features</Link>
      </div>
      <div className='header-item'>
        <Link href='/about'>About</Link>
      </div>
    </div>
  );
}
export default Header;