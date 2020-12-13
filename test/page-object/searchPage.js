import Base from './Base';

class searchPage extends Base{
    get BtnClick(){
        return $('.optanon-allow-all.accept-cookies-button')
    }

    get scrollDown(){
        return $('#Video-1 > section > div')
    }
    get textBelowVideo(){
        return $('#TextStatement-1 > section > div')
    }
    get navDiv(){
        return $('#IconCallouts-1 > section > div > div.bc.cb.cc.cd.f.fc.fd.fe.ff.fg.fh.q > div:nth-child(3) > div:nth-child(2)')
    }
    get navLink(){
        return $('#IconCallouts-1 > section > div > div.bc.cb.cc.cd.cs.dp.fz.ga.gb.q.r > div > a')
    }
}

export default new searchPage();