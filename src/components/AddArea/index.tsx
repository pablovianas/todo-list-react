import { useState, KeyboardEvent } from 'react';
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (event: KeyboardEvent) => {
        if(event.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }
    const handleInput = () => {
      onEnter(inputText)
    }
  
    return (
      <C.Container>
        <button className="image" onClick={handleInput}>➕</button>
        <input
          type="text"
          placeholder="Add a task.."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </C.Container>
    );
}