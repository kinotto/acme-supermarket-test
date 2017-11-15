
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
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_BASKET_REQUEST,
  FETCH_BASKET_TOTAL_REQUEST,
  ADD_TO_BASKET_REQUEST,
  REMOVE_FROM_BASKET_REQUEST,
  FetchProductsRequest,
  FetchBasketRequest,
  AddToBasketRequest,
  RemoveFromBasketRequest,
  FetchBasketTotalRequest
} from '../actions';

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

  it("should create a FETCH_PRODUCTS_REQUEST action", () => {
    let action = {
      type: FETCH_PRODUCTS_REQUEST
    }
    expect(FetchProductsRequest()).toEqual(action);
  })

  it("should create a FETCH_BASKET_REQUEST action", () => {
    let action = {
      type: FETCH_BASKET_REQUEST
    }
    expect(FetchBasketRequest()).toEqual(action);
  })

  it("should create a FETCH_BASKET_TOTAL_REQUEST action", () => {
    let action = {
      type: FETCH_BASKET_TOTAL_REQUEST
    }
    expect(FetchBasketTotalRequest()).toEqual(action);
  })

  it("should create an ADD_TO_BASKET_REQUEST action", () => {
    let action = {
      type: ADD_TO_BASKET_REQUEST
    }
    expect(AddToBasketRequest()).toEqual(action);
  })

  it("should create a REMOVE_FROM_BASKET_REQUEST action", () => {
    let action = {
      type: REMOVE_FROM_BASKET_REQUEST
    }
    expect(RemoveFromBasketRequest()).toEqual(action);
  })


});
