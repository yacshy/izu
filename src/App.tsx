// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef, useState } from 'react';
import './App.css';

function App() {
    // const [count, setCount] = useState(0)
    const [content, setContent] = useState('');
    const container = useRef<HTMLDivElement>(null);

    const getinfo = () => {
        fetch('https://yacshy.github.io')
            .then((res) => res.json())
            .then((res: string) => {
                setContent(res);
                console.log(content);
                if (container.current) {
                    container.current.innerHTML = res;
                }
            });
    };

    getinfo();

    return (
        <>
            <div className="text-3xl font-bold underline bg-red-600 text-white" ref={container}></div>
        </>
    );
}

export default App;
