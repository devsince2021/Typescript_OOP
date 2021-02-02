{
  /**
   * Type assertion 💩
   * 내가 100% 장담할 때만 사용해라
   */

    function jsStrFunc(): any {
      return 2;
    }
    const result = jsStrFunc();
    console.log(result.length, 'js')
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
      return undefined;
    }

    const numbers = findNumbers();
    numbers.push(2);

    const button = document.querySelector('button');
    button.nodeValue

}