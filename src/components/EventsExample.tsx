import React, { useState, FC, useRef } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<any>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);



    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
        
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag');
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('brosili');
        e.dataTransfer.files.item(1);
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler} type="text" placeholder="Управляемый" />
            <input ref={inputRef} type="text" placeholder="Неуправляемый" />
            <button onClick={clickHandler}>Кнопка</button>
            <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', backgroundColor: 'red'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler} 
                style={{width: '200px', height: '200px', backgroundColor: isDrag ? 'blue':'red', marginTop: 15}}>
            </div>
        </div>
  )
}

export default EventsExample