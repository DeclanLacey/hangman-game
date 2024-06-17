export function getLetters() {
    const letters = (() => {
        const lowercase = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
        return lowercase
      })();
    return letters
}