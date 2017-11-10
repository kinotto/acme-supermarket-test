
import React from 'react';
import ProductList from '../components/products/ProductList';
import Basket from '../components/basket/Basket';
import renderer from 'react-test-renderer';
import { createMockStore } from 'redux-test-utils';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';
import {Map, List} from 'immutable';


describe('test main components', () => {
  let store;

  beforeEach(() => {
    store = Map({
      products: List(),
      basket: List()
    })
    const mockStore = configureStore();
    store = mockStore(store);
  })

  it("should create a product list", () => {
    let productList = shallow(<ProductList store={store} />);
    expect(productList).toBeTruthy();
  });

  it("should create a basket", () => {
    let basket = shallow(<Basket store={store} />);
    console.log(basket.props.basket);
    expect(basket).toBeTruthy();
  });
});
