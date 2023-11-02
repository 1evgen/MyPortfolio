
export const createGlitchKeyframes = () => {
    const steps = 30;
    let keyframes = '';

    for (let i = 0; i <= steps; i++) {
        const percentage = (i * (1 / steps)) * 100;
        const clipValue = `rect(${Math.floor(Math.random() * 150)}px, 550px, ${Math.floor(Math.random() * 150)}px, 2px)`;
        keyframes += `
      ${percentage}% {
        clip: ${clipValue};
      }
    `;
    }

    return keyframes;
};