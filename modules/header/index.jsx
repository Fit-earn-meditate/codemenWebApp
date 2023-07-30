import Button from "../../components/buttons";
import themeConfig from "../../config/theme.config"

const Header = () => (
  <header className="bg-white text-black h-90 w-full top-0">
    <div className="container mx-auto flex justify-between py-4  ">
      <div>
        <span id="logo">
          codemen
        </span>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Clients</li>
          <li>
            <Button
              backgroundColor={"#FFAB55"}
              textColor={"#ffffff"}
            >
              contact us
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;