import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDrop } from 'react-dnd';

import { DRAG_NODE } from './DragNode';
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#9991'
  },
});

export default function DropArea() {
  const classes = useStyles();
  const [dropInfo, setInfo] = useState({});
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DRAG_NODE,
    canDrop: (item, monitor) => {      
      return true
    },
    drop: (item, monitor, component) => {     
      setInfo(item);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
  return (
    <div ref={drop} id="drop-area" className={classes.root} >
      <h4>Drop Area</h4>
      {JSON.stringify(dropInfo) !== JSON.stringify({}) &&
        <p>Drop data: {JSON.stringify(dropInfo)}</p>
      }
    </div>
  );
}