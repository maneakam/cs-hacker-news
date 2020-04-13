import React from 'react';
import MainContent from './components/MainContent';
import AppService from './components/js/AppService';
import AppEngine from './components/js/AppEngine';

class App extends React.Component {
    constructor (props) {
        super();

        this.newsData = {
            "created_at": "",
            "title": "",
            "author": "",
            "points": ""
        };

        this.AppData = {};

        AppEngine.init().then(response => {
            return response.json();
        }).then(response => {
            this.AppData = response;
            this.forceUpdate();
        }).catch(error => {
            console.warn(error);
        });

        this.getNewsData = this.getNewsData.bind(this);
    }

    getNewsData() {
        const API = "https://hn.algolia.com/api/v1/search_by_date";
        const context = this;
        const params = context.newsData;

        AppService(API, params).then(response => {
            return response.json();
        }).then(response => {
            context.AppData.hits = response.hits;
            context.forceUpdate();
        }).catch(error => {
            console.warn(error);
        });
    }

    render() {
        return (
            <main className="app-wrapper clearfix">
                <MainContent 
                    getNewsData={this.getNewsData} 
                    newsData={this.newsData} 
                    MainContentData={this.AppData}
                />
            </main>
        );
    }
}

export default App;
