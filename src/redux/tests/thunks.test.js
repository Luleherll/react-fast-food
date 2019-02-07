import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import  { axiosInstance, getDataThunk, postDataThunk
} from '../Thunks';
import { GET_ALL_NEW_ORDERS, LOGIN, ERROR_OCCURRED } from '../actions/actionTypes';
import { getAllNewOrders } from '../actions/AllOrdersActions';
import { errorOccurred, login } from '../actions/UserActions';
import { user, orders } from '../../../__mockData__';


describe('getDatathunk', () => {
  let httpMock;
  let store;
  beforeEach(() => {
    httpMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('Should return all articles', () => {
    httpMock.onGet('orders/').reply(200, orders);
    store
      .dispatch(getDataThunk('orders/', getAllNewOrders))
      .then(() => {
        expect(
          store.getActions(),
        ).toEqual([{ type: GET_ALL_NEW_ORDERS, orders }]);
      });
  });

  it('Should handle ERROR_OCCURRED', () => {
    httpMock.onGet('orders//').reply(403, {error: 'error'});
    store
      .dispatch(getDataThunk('orders//', getAllNewOrders))
      .then(() => {
        expect(store.getActions()).toEqual([{ type: ERROR_OCCURRED, errMsg: {error: 'error'} }]);
      });
  });
});

describe('postDatathunk', () => {
  let httpMock;
  let store;
  const postData = [
    {
      header: postDataThunk('auth/login', {}, login, 'post'),
      title: 'Should return user token and status with HEADER',
    }];
  const postDataError = [
    {
      header: postDataThunk('auth/login', {}, login, 'post'),
      title: 'Should handle ERROR_OCCURRED',
    }];
  beforeEach(() => {
    httpMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore({});
  });
  postData.forEach(post => (
    it(post.title, () => {
      httpMock.onPost('auth/login').reply(201, user);
      httpMock.onGet('auth/login').reply(201, user);
      store
        .dispatch(post.header)
        .then(() => {
          expect(store.getActions()).toEqual([{type: LOGIN, data: user}]);
        });
    })
  ));
  postDataError.forEach(post => (
    it(post.title, () => {
      httpMock.onPost('auth/login').reply(403, {});
      httpMock.onGet('auth/login').reply(403, {});
      store
        .dispatch(post.header)
        .then(() => {
          expect(store.getActions()).toEqual([{ type: ERROR_OCCURRED, errMsg: {} }]);
        });
    })
  ))

});