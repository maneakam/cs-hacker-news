import React from 'react';

class News extends React.Component {
    constructor(props){
        super();
    }
    calculateNEWSCreationDate(creationDate) {
        return ((new Date() - new Date(creationDate)) / (1000 * 60 * 60 * 24 * 365) / 12).toFixed(1);
    }
    render () {
        const {
            author,
            points,
            story_title,
            num_comments,
            created_at_i
        } = this.props.news;
        return(
            <div className="news">
                <p className="numComments">{num_comments}</p>
                <p className="points">{points}</p>
                <p className="storyTitle">
                    <span className="contentDetails">{story_title}</span>
                    <span className="contentDetails">{author}</span>
                    <span className="contentDetails createdDate">{this.calculateNEWSCreationDate(created_at_i)} hours ago... </span>
                    <span className="contentDetails hide">[ hide ]</span>
                </p>
            </div>
        );
    }
}

export default News;
