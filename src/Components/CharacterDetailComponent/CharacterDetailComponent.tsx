import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/Reducers";
import {Button} from "reactstrap";
import {useHistory} from "react-router-dom";


const CharacterDetailComponent = () => {

  const history = useHistory();
  const {characterReducer: {character_detail}} = useSelector((state: RootState) => state);

  return(
    <div>
      <Button onClick={()=>history.push('/')}>
        back
      </Button>
      {(character_detail as any)?.name || 'Hola'}
    </div>
  );
};

export default CharacterDetailComponent;
