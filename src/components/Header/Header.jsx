import bannerImage from "../../assets/banner.jpg"
import "./header.css"

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="h-[80vh] m-2 bg-cover   bg-center  rounded-2xl"
    >
      <div className="flex justify-between p-8 text-white  text-xl   ">
        <div>Logo</div>
        <div>
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Property</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>Login</div>
      </div>
      <div className="flex justify-center">
        <p>DEMO WITH MLS LISTINGS POWERED BY MLSIMPORT.COM</p>
      </div>
    </div>
  )
}

export default Header
