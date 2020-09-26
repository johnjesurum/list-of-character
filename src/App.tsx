import React, {useEffect} from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "./App.scss";
import {useDispatch, useSelector} from "react-redux";
import {CharacterActions} from "./Store/Characters/Slice";
import CharacterListComponent from "./Components/CharacterList/CharacterListComponent";
import {RootState} from "./Store/Reducers";
import LinearProgressComponent from "./Components/Shared/LinearProgressComponent";
import CharacterDetailComponent from "./Components/CharacterDetailComponent/CharacterDetailComponent";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharacterActions.getCharacters());
  }, [dispatch]);

  const {characterReducer: {characters}} = useSelector((state: RootState) => state);


  return (
    <Router>
      {!characters.length && <LinearProgressComponent/>}
      <Switch>
        <Route exact path="/characters">
          <CharacterListComponent/>
        </Route>
        <Route exact path="/character">
          <CharacterDetailComponent/>
        </Route>
        <Redirect from="*" to="/characters"/>
      </Switch>
    </Router>
  );
};

export default App;
