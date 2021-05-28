// java Exception class
// JS Error class

// Error(Exception) try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist! ${fileName}`)
  }
  return 'file contents';
}

function closeFile() {
  //
}

function run () {

  const fileName = 'file';
  try {
    // it is better to keep the excutions may cause error in try block. 
    // instead 
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched')
    return;
  } finally {  // even if the catch block is returned in 25th line, the finally block will works after catch
    closeFile();
    console.log('file closed')
  }
  
  console.log('!!!')
}