import {all} from "@redux-saga/core/effects"
import {characterSaga} from "./Characters/Saga";


export default function * rootSaga() {
  yield all ([
    characterSaga()
  ])
};
