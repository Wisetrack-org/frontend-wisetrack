export const runJS = (code) => {
    try {
      return eval(code); // Execute JS code
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };
  