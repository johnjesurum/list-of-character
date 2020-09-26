import React, {useEffect} from 'react';
import CharacterCardComponent from "../Shared/CharacterCardComponent/CharacterCardComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/Reducers";
import {CharacterActions} from "../../Store/Characters/Slice";
import {useHistory} from "react-router-dom";

const CharacterListComponent = () => {

  const {characterReducer: {characters}} = useSelector((state: RootState) => state);

  useEffect(()=>console.log(characters),[characters]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCharacterDetail = (character:any) => {
    dispatch(CharacterActions.setCharacterDetail(character));
    console.log(character);
    history.push(`character/?id=${character.id}`);
  };

  return(
    <div className="d-flex flex-wrap my-4 justify-content-around">
      {characters?.map((character:any,index:number)=>{
        return <CharacterCardComponent handleSelect={handleCharacterDetail}
                                       character={character} index={index} />
      })}
    </div>
  );
};

export default CharacterListComponent;
