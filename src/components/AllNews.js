import React from 'react';
import News from './News';

class AllNews extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="allNews">
                {
                    this.props && 
                    this.props.newsData && 
                    this.props.newsData.map((news, index) => {
                        return <News news={news} key={index} />
                    })
                }
            </div>
            <div className="moreContent">More...</div>
            </React.Fragment>
        );
    }
}

export default AllNews;
