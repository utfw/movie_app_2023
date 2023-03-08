// import React, { Component } from 'react'
// // rce => react class component export
// export class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

import React from 'react'
// rfce => react function component export
/*
function Macaron(props) {
  // console.log(props);
  return (
    <div>
      <h1>No. {props.propsid}</h1>
      <h2>Name: {props.propsname}</h2>
      <p><img src={props.propsimage} alt="" /></p>
    </div>
  )
}
*/
// 구조분해할당하기.

// function Macaron(props) {
//   const {propsid,propsname,propsimage} = props;
//   // 리턴 밖에 써야함을 명심.
//   return (
//     <div>
//       <h1>No. {propsid}</h1>
//       <h2>Name: {propsname}</h2>
//       <p><img src={propsimage} alt="" /></p>
//     </div>
//   )
// }
// 방법2 ------------------
function Macaron({propsid,propsname,propsimage}) {
  // 중괄호 있어야함. 
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <p><img src={propsimage} alt={propsname} /></p>
    </div>
  )
}

export default Macaron