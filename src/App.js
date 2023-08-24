import { useState } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import gridScript from './python/simpleTest.py';
import createDoc from './python/createDocTest.py'
import { useScript } from '@uidotdev/usehooks';
//import { loadPyodide } from 'pyodide';


function App() {

    const [output, setOutput] = useState('loading...');
    const [output2, setOutput2] = useState('Creating document...')

    const pyodideCDN = useScript("https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js")

    let pyodideFNS = pyodideCDN.loadPyodide()

    // let mountDir = "/mnt";
    // pyodideCDN.FS.mkdir(mountDir);
    // pyodideCDN.FS.mount(pyodideCDN.FS.filesystems.NODEFS, { root: "." }, mountDir);
    // pyodideCDN.runPython("import os; print(os.listdir('/mnt'))");


    // const nativefs = async () => {
    //     await pyodideCDN.mountNativeFS("C:/", dirHandle)
    // }

    const runScript = async (code) => {
        const pyodide = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
        });
        return await pyodide.runPythonAsync(code);
    }

    const createGrid = async () => {
        const gridText = await (await fetch (gridScript)).text();
        const out = await runScript(gridText);
        setOutput(out)
    }

    const createDocFunc = async () => {
        const createText = await (await fetch (createDoc)).text();
        const out = await runScript(createText);
        //await pyodideCDN.FS.syncfs();
        setOutput2(out)
    }

    const runPyodide = async () => {
        pyodideFNS.runPython(pythonScript)
    }

    const pythonScript = 
    `with open("C:\\Users\\mpoll\\Desktop\\surferScripts\\electron-test\\src\\python\\writeTest.txt", "w") as wf:
        data = "writing file successful"
        wf.write(data)`

  return (
    <div>
    <Button color='primary' onClick={createGrid} >Click Me</Button>
    <p>5 + 7 = {output}</p>
    <Button color='primary' onClick={createDocFunc} >Click Me</Button>
    <p>{output2}</p>
    <Button color='primary' onClick={runPyodide} >Click Me</Button>
    </div>
  );
}

export default App;
