import { all } from 'redux-saga/effects';

import cart from './carts/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
