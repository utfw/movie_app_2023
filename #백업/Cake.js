import React, { Component } from 'react'

export class Cake extends Component {
  state = {
    price: 10000,
    discountPrice: 0
  }
  
  discount = () =>{
    this.setState(cur =>({
      discountPrice: cur.price*.7
    }))
  }

  render() {
    const {price,discountPrice} = this.state;
    return (
      <>
      <div>Cake
        <h1>cake 가격 {price}원</h1>
        <h2>할인 가격은 {discountPrice}원 입니다.</h2>
        <button onClick={this.discount}>30% 할인</button>
        </div>
      </>
    )
  }
}

export default Cake