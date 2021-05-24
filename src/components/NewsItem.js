//export default로 한건 {}없이 import사용 가능
import { Component } from 'react'
import style from '../NewsItem.module.css'
import styled from 'styled-components'

const CircledImage = styled.img`
  border: 2px solid red;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`


class NewsItem extends Component {
    render() {

        //비구조 할당
        const { title, description, url, urlToImage } = this.props.article


        return (
            <div>
                <h1 className={style.title}><a className={style.titleLink} href={url} target='_blank'>{title}</a></h1>
                <CircledImage src={urlToImage} />
                <p>{description}</p>
            </div>
        )
    }
}
export default NewsItem