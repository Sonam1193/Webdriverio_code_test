import Base from './Base';

class subscribePage extends Base{
    get ButtonDisplay(){
        return $('/html/body/div[1]/div[2]/div[4]/div[3]/div/button')
    }
    get privacyCentre(){
        return $('#optanon-popup-body-right > p')
    }
    get allowSetting(){
        return $('//*[@id="optanon-popup-bottom"]/div[2]/div[2]/button')
    }
    get NavIcon(){
        return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[3]/button/div')
    }
    get closeNavIcon(){
        return $('/html/body/div[6]/div/nav/div[2]/div[2]/button/div/span')
    }
    get CarNav(){
        return $('//*[@id="site-nav-topbar-wrapper"]/nav/button');
    }
    get closeNav(){
        return $('//*[@id="vcc-site-nav"]/div/div[4]/div/button')
    }
    get learnMoreScroll(){
        return $('//*[@id="ImageWithText-1"]/section/div[1]/div[1]')
    }
    get learnMore(){
        return $('//*[@id="ImageWithText-1"]/section/div[1]/div[2]/div/div/div/div[3]/div')
    }
}

export default new subscribePage();