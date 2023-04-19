import logo from '../../static_images/logo.png';

export const Logo: React.FC = () => {
  return (
    <>
      <img style={{ width:40, marginRight: 10 }} src={logo} alt='logo'/>
    </>
  );
};
