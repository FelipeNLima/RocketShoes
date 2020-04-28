import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import api from '../../services/api';

import Loading from '../../components/Loading';

import * as CartActions from '../../store/modules/carts/actions';

function Home(props) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [teste, setTeste] = useState(true);
  const { amount } = props;

  async function handleList() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setProducts(data);
    setTeste(false);
  }

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRquest(id));
  }

  useEffect(() => {
    handleList();
  }, []);

  return (
    <>
      {teste === false ? (
        <ProductList>
          {products.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <strong>{item.title}</strong>
              <span>{item.priceFormatted}</span>

              <button type="button" onClick={() => handleAddProduct(item.id)}>
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {amount[item.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      ) : (
        <Loading loading={teste} />
      )}
    </>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
