import {
    Selector
} from 'testcafe';

import Page from './tvChartsPage';
const page = new Page();

fixture('TradingView StandAlone Charts')
    .page('https://trade.loginandtrade.com/charts/');

test('TV StandAlone Charts Version', async t => {

    await t
        .expect(page.pageTitle.innerText).eql(page.titleText)

    await t
    console.log(await page.version.innerText)

})
