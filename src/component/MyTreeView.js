import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import DragNode from './DragNode';
import jsonFile from '../assets/New document 5 (1).json';


const useStyles = makeStyles({
  root: {
    width: 250,
    height: '100vh',
    maxWidth: 400,
  },
});

export default function MyTreeView() {
  const classes = useStyles();
  console.log('json', jsonFile);
  return (    
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {jsonFile.map((node, index) => 
        <TreeItem nodeId={node.name} label={node.name}>
          {node.analysistype.map((sate) => 
            <TreeItem nodeId={sate.name} label={sate.name} >
              {sate.analysistypes.map((it) => 
                <DragNode
                  id={it.id}
                  name={it.name}
                  sateName={sate.name}
                  date={node.name}
                  handleMouseDown={()=>{}}
                >
                  <TreeItem nodeId={it.name} label={it.name} />
                </DragNode>
              )}
            </TreeItem>
          )}
        </TreeItem>
      )}
    </TreeView>    
  );
}