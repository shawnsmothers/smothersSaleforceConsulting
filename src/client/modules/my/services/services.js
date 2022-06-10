import {LightningElement} from 'lwc';
 import Services_Data from '../../../data/servicesData.js'
export default class Services extends LightningElement{

    ServicesData = []


    connectedCallback(){
        this.formatData()
    }

    formatData(){
       this.ServicesData =  Services_Data.map(item=>{
            let className =`icon ${item.color}`
            return{...item, className}

        })
    }
    
}