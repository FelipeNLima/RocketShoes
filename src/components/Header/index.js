import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { Container, Cart, Theme } from './styles';
import logolight from '../../assets/image/LogoLight.svg';
import logodark from '../../assets/image/LogoDark.svg';

function Header({ cartSize, toggleTheme, theme }) {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Link to="/">
          <img
            src={theme === 'dark' ? logolight : logodark}
            alt="Rocketshoes"
          />
        </Link>
        <Theme>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onHandleColor="#D3D3D3"
            offHandleColor="#423325"
            offColor={shade(0.15, '#D3D3D3')}
            onColor="#fff"
          />
        </Theme>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket
            size={36}
            color={theme === 'dark' ? '#fff' : '#191920'}
          />
        </Cart>
      </Container>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
