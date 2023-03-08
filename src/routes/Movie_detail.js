import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Detail.css'


function Movie_detail() {
  const location = useLocation();
  const {genres,poster,summary,title,year} = location.state;
  // state 안의 속성들을 분해하여 할당함. 속성 이름이 존재해야함. 
  //link로 전해지는 state는 주소창으로 전해짐 => location을 통해 받을 수 있다. 
  return (
    <div className="detail">
      <img src={poster} alt={title} title={title} />
      <div className="detail_data">
        <h3 className="detail_title" style={{backgroundColor:"#eee"}}>{title}</h3>
        <h4 className="detail_year">{year}</h4>
        <ul className="detail_genres">
        {/* {
        genres.map((genre,index) => <li className='detail_genre' key={index}>{genre}</li>
        )}         */}
        {genres.map((genre,index) => {
          return(
            <li className="detail_genre" key={index}>{genre}</li>
            )
          }
        )}
        </ul>
        <p className="detail_summary">{summary.slice(0,180)} ...</p>
      </div>
  </div>
  )
}

export default Movie_detail