import React, { useState, useEffect } from "react";
import { plusOne } from "../../../../Redux/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { setLanguage } from "redux-i18n";

// function SimpleDescription() {
//   const props = useSelector((state) => state.i18nState);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <button onClick={() => dispatch(plusOne())}>Car</button>
//       <div>
//         <strong>Your current language, is: {props.lang}</strong>
//         <br />
//         {this.context.t("Translate this text")}
//         <br />
//         {this.context.t("Hello {n}!", { n: "World" })}
//         <br />
//         <br />
//         <button onClick={this.changeLanguage.bind(this)}>
//           Change Language
//         </button>
//       </div>
//     </div>
//   );
// }

function SimpleDescription() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();
  const props = useSelector((state) => state);

  useEffect(() => {
    console.log(props);
    setLanguage("es")
    console.log(i18n);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default SimpleDescription;
