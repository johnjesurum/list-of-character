import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const LinearProgressComponent = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    }),
  );
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </div>
  );
};

export default LinearProgressComponent;
