import { loadPyodide } from "pyodide";

let pyodideInstance = null;

export const runPython = async (code) => {
  try {
    if (!pyodideInstance) {
      pyodideInstance = await loadPyodide(); // Load Pyodide once
    }
    const result = await pyodideInstance.runPythonAsync(code);
    return result;
  } catch (error) {
    return `Python Error: ${error.message}`;
  }
};
