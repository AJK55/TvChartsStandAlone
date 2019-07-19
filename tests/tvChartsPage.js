import {
    Selector
} from 'testcafe';

export default class Page {
    constructor() {

        this.pageTitle = Selector('title');
        this.titleText = 'Trading Platform';
        this.version = Selector('body > div.version');

    }
}
