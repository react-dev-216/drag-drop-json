import { DndProvider }  from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import logo from './logo.svg';
import './App.css';
import MyTreeView from './component/MyTreeView';
import DropArea from './component/DropArea';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <MyTreeView />
        <DropArea />
      </div>
    </DndProvider>
  );
}

export default App;
