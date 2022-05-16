import { useMemo } from 'react';
import MyButton from '../Button/myButton';

export const usePages = (maxPages,currentPage,onClick, pages)=>{
const memo = useMemo(
    () => {
      let buttons = [];
      for (let x = 1; x < maxPages + 1; x++) {
        if (currentPage !== x) {
          console.log("buttonnnn");
          buttons.push(
            <MyButton onClick={() => onClick(x)} key={x}>
              {x}
            </MyButton>
          );
        } else {
          buttons.push(
            <MyButton style={{ background: "green", color: "white" }} key={x}>
              {x}
            </MyButton>
          );
        }
      }
      return buttons;
    },
    [pages]
  )
  return memo
}