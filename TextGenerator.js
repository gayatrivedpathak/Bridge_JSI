const generateText = size => {
  let text = '';
  while (text.length <= size) {
    text = 'text' + text;
  }
  return text;
};

export default generateText;
