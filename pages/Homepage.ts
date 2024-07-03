import { Browser, Page, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';

export class Homepage {
    private page: Page;
    private browser: Browser;

    searchBar: string;
    searchBar_Button: string;
    Header: string;
    searchBar_Label: string;
    alt_Button: string;
    alt_Button_Icon: string;
    carouselImage1: string;
    carouselImage2: string;
    carouselImage3: string;
    carouselImage4: string;
    carouselImage5: string;
    carouselImage6: string;
    carouselImage7: string;
    carouselButtonPrev: string;
    carouselButtonNext: string;
    navbarButton_Locations: string;
    navbarButton_About: string;
    navbarButton_DiscoverSola: string;
    navbarButton_Education: string;
    navbarButton_News: string;
    navbarButton_ContactUs: string;
    navbarButton_FindYourSuite: string;
    navbarButton_BookAService: string;
    navbarButton_Country: string;
  
    constructor(page: Page, browser: Browser) {
        this.page = page;
        this.browser = this.browser;
        
        this.navbarButton_Locations = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/locations\"] button";
        this.navbarButton_About = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/about\"] button";
        this.navbarButton_DiscoverSola = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/why-sola\"] button";
        this.navbarButton_Education = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/education\"] button";
        this.navbarButton_News = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/news\"] button";
        this.navbarButton_ContactUs = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/contact-us#leaseStudio\"] button";
        this.navbarButton_FindYourSuite = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] button[class=\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium button-contained contained-button-slide-effect-secondary navbar-button primary-button css-1ydaw8c\"]";
        this.navbarButton_BookAService = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] a[href=\"/booknow\"] span";
        this.navbarButton_Country = "[class=\"MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy\"] div[class=\"custom-country-box desktop-only MuiBox-root css-0\"]";

        this.Header = "[class=\"find-sola-salon-inner MuiBox-root css-0\"] [class=\"MuiTypography-root MuiTypography-h1 home-title-text color-dark-blue css-171h0ym\"]";
        this.searchBar_Label = "[id=\":Rqal6kqjad6:-label\"]";
        this.searchBar = "[id=\":Rqal6kqjad6:\"][name=\"search\"]";
        this.searchBar_Button = "[class=\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium contained-button-slide-effect-secondary primary-button css-c7vqku\"]";
        this.alt_Button = "[class=\"MuiTypography-root MuiTypography-body1 color-primary text-underline css-9l3uo3\"]";
        this.alt_Button_Icon = "[src=\"/images/right-icon.svg\"]";

        this.carouselImage1 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_1.webp\"]";
        this.carouselImage2 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_2.webp\"]";
        this.carouselImage3 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_3.webp\"]";
        this.carouselImage4 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_4.webp\"]";
        this.carouselImage5 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_5.webp\"]";
        this.carouselImage6 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_6.webp\"]";
        this.carouselImage7 = "[class=\"slick-slide\"] img[src=\"/images/home-page/carousel/image_7.webp\"]";
        this.carouselButtonPrev = "[class=\"slick-arrow slick-prev\"]";
        this.carouselButtonNext = "[class=\"slick-arrow slick-next\"]";

    }
  
    async goto_Homepage(){
        const comAct = new CommonActions(this.page, this.browser);
        await comAct.openURL("https://qa-new.solasalonstudios.com/");
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verify_AllElementsAreVisible() {
        const comAct = new CommonActions(this.page, this.browser);

        // check navbar elements
        await comAct.verifyElementHasText(this.navbarButton_Locations,"Locations");
        await comAct.verifyElementHasText(this.navbarButton_About,"About");
        await comAct.verifyElementHasText(this.navbarButton_DiscoverSola,"Discover Sola");
        await comAct.verifyElementHasText(this.navbarButton_Education,"Education");
        await comAct.verifyElementHasText(this.navbarButton_News,"News");
        await comAct.verifyElementHasText(this.navbarButton_ContactUs,"Contact us");
        await comAct.verifyElementHasText(this.navbarButton_FindYourSuite,"Find Your Suite");
        await comAct.verifyElementHasText(this.navbarButton_BookAService,"BOOK A SERVICE");
        await comAct.verifyElementIsVisible(this.navbarButton_Country);

        // check search component elements
        await comAct.verifyElementHasText(this.Header,"Your dream. Your space. Your success story.");
        await comAct.verifyElementHasText(this.searchBar_Label,"Search for your local Sola");
        await comAct.verifyElementIsVisible(this.searchBar);
        await comAct.verifyElementHasText(this.searchBar_Button,"FIND A LOCATION");
        await comAct.verifyElementIsVisible(this.alt_Button_Icon,);
        await comAct.verifyElementHasText(this.alt_Button,"Looking to book a service instead?");
        
        // check carousel elements
        await comAct.verifyElementIsVisible(this.carouselImage1);
        await comAct.verifyElementIsVisible(this.carouselImage2);
        await comAct.verifyElementIsVisible(this.carouselImage3);
        await comAct.verifyElementIsVisible(this.carouselImage4);
        await comAct.verifyElementIsVisible(this.carouselImage5);
        await comAct.verifyElementIsVisible(this.carouselImage6);
        await comAct.verifyElementIsVisible(this.carouselImage7);
        await comAct.verifyElementIsVisible(this.carouselButtonPrev);
        await comAct.verifyElementIsVisible(this.carouselButtonNext);

    }
  
    async test_Search_FindALocation(){
        const comAct = new CommonActions(this.page, this.browser);
        await this.page.fill(this.searchBar ,"Garden City");
        await this.page.keyboard.press("ENTER");
        await this.page.click(this.searchBar_Button);
    }
  
    async test_Search_LookingToBookAServiceInstead(){
        const comAct = new CommonActions(this.page, this.browser);
        await this.page.fill(this.searchBar ,"Garden City");
        await this.page.keyboard.press("ENTER");
        await this.page.click(this.alt_Button);
    }

}