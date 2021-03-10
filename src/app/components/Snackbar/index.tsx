/**
 *
 * Snackbar
 *
 */
import React, { useState, useEffect } from 'react';
import useStyles from './styles';

interface Props {
  onClose: any;
  content: any;
}

export default function Snackbar(props: Props) {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setCounter(counter + 1);
      if (counter === 5) {
        props.onClose();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [counter, props]);
  return <div className={classes.root}>{props.content}</div>;
}
