import { Page, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';

export class SolaConnect {
    private page: Page;
    contentTree_SolaPros: string;
    contentTree_SolaPros_AllSolaPros: string;
    SolaPros_AllSolaPros_ExportButton: string;
    SelectFieldsToExport_Header: string;
    SelectFieldToExport_ExportName: string;
    SelectFieldToExport_ExportName_Field: string;
    SelectFieldToExport_CommonlyUsed: string;
    SelectFieldToExport_CommonlyUsed_EmailAddress_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_EmailAddress_Label: string;
    SelectFieldToExport_CommonlyUsed_Phone_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_Phone_Label: string;
    SelectFieldToExport_CommonlyUsed_FirstName_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_FirstName_Label: string;
    SelectFieldToExport_CommonlyUsed_Status_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_Status_Label: string;
    SelectFieldToExport_CommonlyUsed_LastName_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_LastName_Label: string;
    SelectFieldToExport_CommonlyUsed_StudioNumber_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_StudioNumber_Label: string;
    SelectFieldToExport_CommonlyUsed_Location_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_Location_Label: string;
    SelectFieldToExport_CommonlyUsed_SelectAll_Checkbox: string;
    SelectFieldToExport_CommonlyUsed_SelectAll_Label: string;
    SelectFieldToExport_AllFields: string;
    SelectFieldToExport_AllFields_SelectAll_Checkbox: string;
    SelectFieldToExport_AllFields_SelectAll_Label: string;
    SelectFieldToExport_AllFields_ANC_Checkbox: string;
    SelectFieldToExport_AllFields_ANC_Label: string;
    SelectFieldToExport_AllFields_Botox_Checkbox: string;
    SelectFieldToExport_AllFields_Botox_Label: string;
    SelectFieldToExport_AllFields_EE_Checkbox: string;
    SelectFieldToExport_AllFields_EE_Label: string;
    SelectFieldToExport_AllFields_HE_Checkbox: string;
    SelectFieldToExport_AllFields_HE_Label: string;
    SelectFieldToExport_AllFields_Massage_Checkbox: string;
    SelectFieldToExport_AllFields_Massage_Label: string;
    SelectFieldToExport_AllFields_PU_Checkbox: string;
    SelectFieldToExport_AllFields_PU_Label: string;
    SelectFieldToExport_AllFields_SPP_Checkbox: string;
    SelectFieldToExport_AllFields_SPP_Label: string;
    SelectFieldToExport_AllFields_TTU_Checkbox: string;
    SelectFieldToExport_AllFields_TTU_Label: string;
    SelectFieldToExport_AllFields_UA_Checkbox: string;
    SelectFieldToExport_AllFields_UA_Label: string;
    SelectFieldToExport_AllFields_WH_Checkbox: string;
    SelectFieldToExport_AllFields_WH_Label: string;
    SelectFieldToExport_AllFields_Barber_Checkbox: string;
    SelectFieldToExport_AllFields_Barber_Label: string;
    SelectFieldToExport_AllFields_Brows_Checkbox: string;
    SelectFieldToExport_AllFields_Brows_Label: string;
    SelectFieldToExport_AllFields_FURL_Checkbox: string;
    SelectFieldToExport_AllFields_FURL_Label: string;
    SelectFieldToExport_AllFields_Id_Checkbox: string;
    SelectFieldToExport_AllFields_Id_Label: string;
    SelectFieldToExport_AllFields_Microblading_Checkbox: string;
    SelectFieldToExport_AllFields_Microblading_Label: string;
    SelectFieldToExport_AllFields_SAMB_Checkbox: string;
    SelectFieldToExport_AllFields_SAMB_Label: string;
    SelectFieldToExport_AllFields_SPV_Checkbox: string;
    SelectFieldToExport_AllFields_SPV_Label: string;
    SelectFieldToExport_AllFields_TBB_Checkbox: string;
    SelectFieldToExport_AllFields_TBB_Label: string;
    SelectFieldToExport_AllFields_UN_Checkbox: string;
    SelectFieldToExport_AllFields_UN_Label: string;
    SelectFieldToExport_AllFields_YURL_Checkbox: string;
    SelectFieldToExport_AllFields_YURL_Label: string;
  
    constructor(page: Page) {
        this.page = page;
        
        this.contentTree_SolaPros = "//span[@class=\"MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u\"][text()=\"Sola Pros\"]/ancestor::li";
        this.contentTree_SolaPros_AllSolaPros = "//span[@class=\"MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u\"][text()=\"All Sola Pros\"]/ancestor::a[@href=\"/sola-pros\"]";
        this.SolaPros_AllSolaPros_ExportButton = "[class=\"MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root xs-small css-1bi6zj0\"]";
        this.SelectFieldsToExport_Header = "//h2[text()=\"Select fields to export\"]";
    
        this.SelectFieldToExport_ExportName = "//div[@class=\"MuiFormControl-root css-13sljp9\"]/span[@class=\"MuiTypography-root MuiTypography-button css-8ihi38\"][text()=\"Export Name:\"]";
        this.SelectFieldToExport_ExportName_Field = "#mui-550";
        
        this.SelectFieldToExport_CommonlyUsed = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//h6[text()=\"Commonly Used\"]";
        this.SelectFieldToExport_CommonlyUsed_SelectAll_Checkbox = "//h6[text()=\"Commonly Used\"]/parent::div//input[@type=\"checkbox\"]";
        this.SelectFieldToExport_CommonlyUsed_SelectAll_Label = "//h6[text()=\"Commonly Used\"]/parent::div//span[text()=\"Select All\"]";
        this.SelectFieldToExport_CommonlyUsed_EmailAddress_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Email address\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_EmailAddress_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Email address\"]";
        this.SelectFieldToExport_CommonlyUsed_Phone_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Phone\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_Phone_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Phone\"]";
        this.SelectFieldToExport_CommonlyUsed_FirstName_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"First name\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_FirstName_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"First name\"]";
        this.SelectFieldToExport_CommonlyUsed_Status_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Status\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_Status_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Status\"]";
        this.SelectFieldToExport_CommonlyUsed_LastName_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Last name\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_LastName_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Last name\"]";
        this.SelectFieldToExport_CommonlyUsed_StudioNumber_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Studio number\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_StudioNumber_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Studio number\"]";
        this.SelectFieldToExport_CommonlyUsed_Location_Checkbox = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Location\"]/parent::label/span/input";
        this.SelectFieldToExport_CommonlyUsed_Location_Label = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//span[text()=\"Location\"]";
    
        this.SelectFieldToExport_AllFields = "//div[@class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-1uo6sxl\"]//h6[text()=\"All Fields\"]";
        this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "//h6[text()=\"All Fields\"]/parent::div//input[@type=\"checkbox\"]";
        this.SelectFieldToExport_AllFields_SelectAll_Label = "//h6[text()=\"All Fields\"]/parent::div//span[text()=\"Select All\"]";
        
        this.SelectFieldToExport_AllFields_ANC_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Accepting new clients\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_ANC_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Accepting new clients\"]";
        this.SelectFieldToExport_AllFields_Botox_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Botox\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_Botox_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Botox\"]";
        this.SelectFieldToExport_AllFields_EE_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Eyelash extensions\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_EE_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Eyelash extensions\"]";
        this.SelectFieldToExport_AllFields_HE_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Hair extensions\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_HE_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Hair extensions\"]";
        this.SelectFieldToExport_AllFields_Massage_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Massage\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_Massage_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Massage\"]";
        this.SelectFieldToExport_AllFields_PU_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Pinterest url\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_PU_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Pinterest url\"]";
        this.SelectFieldToExport_AllFields_SPP_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Sola pro platform\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_SPP_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Sola pro platform\"]";
        this.SelectFieldToExport_AllFields_TTU_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Tik tok url\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_TTU_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Tik tok url\"]";
        this.SelectFieldToExport_AllFields_UA_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Updated at\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_UA_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Updated at\"]";
        this.SelectFieldToExport_AllFields_WH_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Work hours\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_WH_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Work hours\"]";
        
        this.SelectFieldToExport_AllFields_Barber_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Barber\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_Barber_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Barber\"]";
        this.SelectFieldToExport_AllFields_Brows_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Brows\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_Brows_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Brows\"]";
        this.SelectFieldToExport_AllFields_FURL_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Facebook url\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_FURL_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Facebook url\"]";
        this.SelectFieldToExport_AllFields_Id_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Id\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_Id_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Id\"]";
        this.SelectFieldToExport_AllFields_Microblading_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Microblading\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_Microblading_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Microblading\"]";
        this.SelectFieldToExport_AllFields_SAMB_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Send a message button\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_SAMB_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Send a message button\"]";
        this.SelectFieldToExport_AllFields_SPV_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Sola pro version\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_SPV_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Sola pro version\"]";
        this.SelectFieldToExport_AllFields_TBB_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Total booknow bookings\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_TBB_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Total booknow bookings\"]";
        this.SelectFieldToExport_AllFields_UN_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Url name\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_UN_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Url name\"]";
        this.SelectFieldToExport_AllFields_YURL_Checkbox = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Yelp url\"]/parent::label//input";
        this.SelectFieldToExport_AllFields_YURL_Label = "//h6[text()=\"All Fields\"]/ancestor::div//span[text()=\"Yelp url\"]";
        
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Checkbox = "";
        // this.SelectFieldToExport_AllFields_SelectAll_Label = "";
    }
  
    async goto_CMS_AllSolaPro_ExportPopup(){
        const comAct = new CommonActions(this.page);
        await comAct.openURL("https://qa-connect.solasalonstudios.com/");
        await comAct.login("glenn.badong@outliant.com", "Lolzka24!");
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.click(this.contentTree_SolaPros);
        await this.page.click(this.contentTree_SolaPros_AllSolaPros);
        await this.page.click(this.SolaPros_AllSolaPros_ExportButton);
        await comAct.verifyElementHasText(this.SelectFieldsToExport_Header, "Select fields to export");
    }

    async test_SID34() {
        const comAct = new CommonActions(this.page);

        // Verify all elements in the export popup
        await comAct.verifyElementHasText(this.SelectFieldToExport_ExportName, "Export Name:");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_ExportName_Field);

        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed, "Commonly Used");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_SelectAll_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_SelectAll_Label, "Select All");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_EmailAddress_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_EmailAddress_Label, "Email address");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_Phone_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_Phone_Label, "Phone");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_FirstName_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_FirstName_Label, "First name");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_Status_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_Status_Label, "Status");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_LastName_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_LastName_Label, "Last name");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_StudioNumber_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_StudioNumber_Label, "Studio number");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_CommonlyUsed_Location_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_CommonlyUsed_Location_Label, "Location");

        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields, "All Fields");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select All");

        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_ANC_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_ANC_Label, "Accepting new clients");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_Botox_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_Botox_Label, "Botox");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_EE_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_EE_Label, "Eyelash extensions");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_HE_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_HE_Label, "Hair extensions");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_Massage_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_Massage_Label, "Massage");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_PU_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_PU_Label, "Pinterest url");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SPP_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SPP_Label, "Sola pro platform");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_TTU_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_TTU_Label, "Tik tok url");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_UA_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_UA_Label, "Updated at");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_WH_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_WH_Label, "Work hours");

        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_Barber_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_Barber_Label, "Barber");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_Brows_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_Brows_Label, "Brows");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_FURL_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_FURL_Label, "Facebook url");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_Id_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_Id_Label, "Id");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_Microblading_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_Microblading_Label, "Microblading");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SAMB_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SAMB_Label, "Send a message button");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SPV_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SPV_Label, "Sola pro version");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_TBB_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_TBB_Label, "Total booknow bookings");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_UN_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_UN_Label, "Url name");
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_YURL_Checkbox);
        await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_YURL_Label, "Yelp url");
        
        await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
        // await comAct.verifyElementIsVisible(this.SelectFieldToExport_AllFields_SelectAll_Checkbox);
        // await comAct.verifyElementHasText(this.SelectFieldToExport_AllFields_SelectAll_Label, "Select");
    }

}