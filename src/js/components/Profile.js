import Component from '../framework/Component';
import HeaderComponent from './HeaderComponent';
import ProfileComponent from './ProfileComponent';
import FooterComponent from './FooterComponent';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.headerComponent = new HeaderComponent();
    this.profileComponent = new ProfileComponent();
    this.footerComponent = new FooterComponent();

    this.host = document.createElement('div');
    this.host.classList.add('profile');
  }

  render() {
    return [
      this.headerComponent.update({}),
      this.profileComponent.update({}),
      this.footerComponent.update({})
    ];
  }
}

export default Profile;
