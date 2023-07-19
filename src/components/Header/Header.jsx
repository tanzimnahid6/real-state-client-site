import bannerImage from '../../assets/banner.jpg'; 
import './header.css'

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImage})`}} className='h-[80vh] m-4 bg-cover  bg-center brightness-50 rounded-2xl'> 
            <div className="flex justify-between ">
                <div>Logo</div>
                <div>
                    <ul className="flex gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>Login</div>
            </div>
        </div>
    );
};

export default Header;
