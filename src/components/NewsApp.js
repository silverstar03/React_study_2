import { Component } from 'react'
import NewsItem from './NewsItem'
import '../style.css'
import '../NewsApp.css'
class NewsApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        const apiKey = '533fe6a6d47847a8a61a319da2c18efb'
// fetch 하기에 좋은 메소드
        fetch(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.articles)
                this.setState({
                    articles: data.articles
                })
            })
    }
    render() {
        return (
            <div id="news-app">
                {
                    this.state.articles.length === 0
                        ? <h1>표시할 뉴스가 없습니다.</h1>
                        //jsx에서는 삼항연산자밖에 못쓴다.
                        :
                        <ul>
                            {
                                this.state.articles.map((article, idx) => {
                                    return (<li key={idx}>
                                        <NewsItem article={article} />
                                    </li>)
                                })
                            }
                        </ul>
                }
            </div>
        );
    }
}
//내보내기 default는 하나만 됨.
export default NewsApp