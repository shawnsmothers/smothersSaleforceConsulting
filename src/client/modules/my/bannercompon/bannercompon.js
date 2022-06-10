import { LightningElement } from 'lwc';
import Banner_Data from '../../../data/bannerData.js';
export default class Bannercompon extends LightningElement {
    heading = Banner_Data.heading;
    services = Banner_Data.services;
    bannerBtnText = Banner_Data.bannerBtnText;
}
