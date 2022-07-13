import { images } from '../../assets';
import { Avatar, Content, FirstContent, SecondContent } from './styles'

function Navbar() {
    return (
      <Content>
        <FirstContent>
            <h3>Bienvenido</h3>
            <h4>Andy Caicedo Rivas</h4>
        </FirstContent>
        <SecondContent>
            <img src={images.notiIcon} alt="notiIcon" />
            <Avatar src="https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/277788452_10228393225359538_499825948892542778_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yjLKYU2uSZoAX93VZtc&tn=oW3_vHAfXHH9MF9D&_nc_ht=scontent.feoh2-1.fna&oh=00_AT-dl3aqA4ktSRdgwLw-GVSppQZguxRgiJXMpeK5K3tdSg&oe=62D45C12" alt="avatar" />
        </SecondContent>
      </Content>
    )
}

export default Navbar;