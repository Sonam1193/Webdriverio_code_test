
import App from '../page-object/App';
import searchPage from '../page-object/searchPage';

describe('Volvo Car Safety', () => {
  it('should open the link ', () => {
      App.openHomepage();
      searchPage.pauseShort();
  });

  it('should click on Cookie Accept button and verify the title of the page', ()=> {
     expect(searchPage.BtnClick).toBeDisplayed();
     searchPage.BtnClick.click();
     searchPage.BtnClick.waitForExist();
     expect(browser).toHaveTitle('A million more | Volvo Cars');
  });

  it('should click on watch the story button and video should run', () => {
    searchPage.scrollDown.scrollIntoView();
    searchPage.scrollDown.waitForExist();
    searchPage.scrollDown.click();
    searchPage.pauseLong();
  });

  it('should verify the text "A million more. With new and existing safety features, we are determined to save a million more lives."',
   () => {
    expect(searchPage.textBelowVideo).toBeDisplayed();
    searchPage.textBelowVideo.scrollIntoView();
    searchPage.textBelowVideo.waitForExist();
  });

  it('should verify the hyperlink and navigate to that link page', () => {
    searchPage.navDiv.waitForExist();
    searchPage.navDiv.scrollIntoView();
    searchPage.navLink.click();
    expect(browser).toHaveTitle('Car safety | Volvo Cars');

  });
})


  
