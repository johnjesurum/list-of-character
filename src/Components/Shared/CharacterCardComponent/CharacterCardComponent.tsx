import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type Props = {
  character:any;
  index:number;
  handleSelect:(character:any)=>void;
}

const CharacterCardComponent : React.FC <Props> = ({character,index,handleSelect}) => {

  const useStyles = makeStyles({
    root: {
      width: 300,
      marginTop:30
    },
    name : {
      height : 70
    }
  });

  const classes = useStyles();

  return (
    <Card onClick={()=>handleSelect(character)} key={'character-card-'+index} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          width="100%"
          image={character?.image}
          title={character?.name}
        />
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {character?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className="d-block"> <b>Gender: </b> {character?.gender}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCardComponent;
