import React from 'react'

function Food(props) {
  // console.log(props)
  return (
    <div>rfce를 사용할 경우 기본적으로 파일이름과 같은 컴포넌트명으로 됨. {props.props123}, {props.propsName}, {props.freeName1}
    </div>
  )
}

export default Food