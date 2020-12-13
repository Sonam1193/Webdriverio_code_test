import App from '../page-object/App';
import subscribePage from '../page-object/subscribePage';

describe('Volvo Car Safety| A million more', () => {
    it('should open the link ', () => {
        App.openHomepage();
        subscribePage.pauseShort();
    });

    it('should click on Cookie Settings button and verify the page', ()=> {
      subscribePage.ButtonDisplay.click();
      subscribePage.privacyCentre.waitForExist();
      expect(subscribePage.privacyCentre).toHaveText('Privacy Preference Centre');
    });

   it('should allow privacy Setting', () => {
        subscribePage.allowSetting.waitForExist();
        subscribePage.allowSetting.click();
        expect(browser).toHaveTitle('A million more | Volvo Cars');
     });

    it('should open right side Navigation Item ', () => {
        subscribePage.NavIcon.waitForExist();
        subscribePage.NavIcon.click()
     });
    it('should close navigation panel', () => {
        subscribePage.closeNavIcon.waitForExist();
        subscribePage.closeNavIcon.click();
        subscribePage.pauseShort();
      });
    
    it('should click cars navigation button ', () => {
        subscribePage.CarNav.waitForExist();
        subscribePage.CarNav.click();
        subscribePage.pauseShort();
        
    });

    it('should close cars navigation panel', () => {
        subscribePage.closeNav.click();
        subscribePage.pauseShort();
    });
    it('should scroll into Decades of Innovation Learn More and Click on it ', () => {
        subscribePage.learnMoreScroll.waitForExist();
        subscribePage.learnMoreScroll.scrollIntoView();
        subscribePage.pauseShort();
        subscribePage.learnMore.click();
    });
});