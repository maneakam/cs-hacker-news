import AppService from './AppService';

const AppEngine = {
    init: function () {
        const API = "https://hn.algolia.com/api/v1/search_by_date";
        return AppService(API);
    }
}

export default AppEngine;
