import {takeLatest, call, put} from "@redux-saga/core/effects";
import {GET_CHARACTERS} from "./Types";
import * as Services from "../../Services/index";
import {toast} from "../../Utils/utis";
import {CharacterActions} from "./Slice";

function* getCharacters() {
  try {
    const res = yield call (Services.getCharactersService);
    if (res.success) {
      yield put(CharacterActions.setCharacters(res));
    }else {
      throw Error(res);
    }
  } catch (e) {
    console.log(e);
    toast(e, "error");
  }
}

export function* characterSaga() {
  yield takeLatest(GET_CHARACTERS,getCharacters);
}
