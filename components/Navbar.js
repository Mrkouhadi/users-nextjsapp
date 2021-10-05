import Link from 'next/link';
import Image from'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/tick.svg" width={128} height={77} alt="logo"/>
            </div>
            <Link href="/" ><a>Home</a></Link>
            <Link href="/contact" ><a>contact</a></Link>           
            <Link href="/mylistings" ><a>List</a></Link> 
        </nav>
    )
};

export default Navbar
