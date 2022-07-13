import { Content, LogoContent, LogoutContent, MenuContent, MenuItem, MenuList } from "./styles";
import { images } from "../../assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <Content>
            <LogoContent>
                <img className='bigLogo' src={images.logo} alt="logo" />
                <img className='logoMini' src={images.logoMini} alt="logo" />
            </LogoContent>
            <MenuContent>
                <MenuList>
                    <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>
                        <MenuItem>
                            <img src={images.homeIcon} alt="homeIcon" />
                            <span className='labelNav'>Inicio</span>
                        </MenuItem> 
                    </NavLink>
                    <NavLink to="/wallet">
                        <MenuItem>
                            <img src={images.walletIcon} alt="walletIcon" />
                            <span className='labelNav'>Cartera</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/transactions">
                        <MenuItem>
                            <img src={images.transIcon} alt="transIcon" />
                            <span className='labelNav'>Transacciones</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/statitics">
                        <MenuItem>
                            <img src={images.statsIcon} alt="statsIcon" />
                            <span className='labelNav'>Estadisticas</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/settings">
                        <MenuItem>
                            <img src={images.setIcon} alt="setIcon" />
                            <span className='labelNav'>Configuraciones</span>
                        </MenuItem>
                    </NavLink>
                </MenuList>
            </MenuContent>
            <LogoutContent>
                <NavLink to="/login">
                    <img src={images.logoutIcon} alt="logoutIcon" />
                    <span className='labelNav'>Cerrar sesión</span>
                </NavLink>
            </LogoutContent>
        </Content>
    );
}

export default Sidebar;