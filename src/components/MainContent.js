import React from 'react';
import AllNews from './AllNews';

class MainContent extends React.Component {
    render() {
        return (
            <div className="content">
                {
                    this.props && 
                    this.props.MainContentData && 
                    this.props.MainContentData.hits && 
                    <AllNews 
                        newsData={this.props.MainContentData.hits} 
                    />
                }
            </div>
        );
    }
}

export default MainContent;
