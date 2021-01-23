function encrypt(message) {
  // Make column/row square-code grid
  const messageStripped = message.toLowerCase().replace(/[\s\W_]/g, "");
  const columns = Math.ceil(Math.sqrt(messageStripped.length));
  const rows = Math.ceil(messageStripped.length / columns);
  let messageArray = messageStripped.split("");
  let squareCode = [];
  for (let i = 0; i < rows; i++) {
    let column = [];
    squareCode[i] = column;
    for (let j = 0; j < columns; j++) {
      column[j] = messageArray.shift();
    }
  }
  // Get cipher character-set (top to bottom in each col left to right)
  let cipherArray = [];
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < squareCode.length; j++) {
      cipherArray.push(squareCode[j][i]);
    }
  }
  // Format cipher to be in blocks of 5 characters separated by a space
  let cipherClusters = [];
  while (cipherArray.length > 5) {
    let cipherSplice = cipherArray.splice(0, 5);
    cipherClusters = cipherClusters.concat(cipherSplice);
    cipherClusters.push(" ");
  }
  cipher = cipherClusters.concat(cipherArray);
  
  return cipher.join("");
}