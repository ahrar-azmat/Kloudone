import { LightningElement, track} from "lwc";
import Name from '@salesforce/schema/Project__c.Name';
import Owner from '@salesforce/schema/Project__c.Owner__c';
import Project_Type from '@salesforce/schema/Project__c.Project_Type__c';
import Project_Status from '@salesforce/schema/Project__c.Status__c';
import Priority from '@salesforce/schema/Project__c.Priority__c';
import Account_New from '@salesforce/schema/Project__c.Account_Name__c';
export default class LwcCustomModal extends LightningElement {
  
  @track customFormModal = false;
    customShowModalPopup() {
      this.customFormModal = true;
    }
  
    customHideModalPopup() {
      this.customFormModal = false;
    }
  _Name_field = Name;
    get Name_field() {
        return this._Name_field;
    }
    set Name_field(value) {
        this._Name_field = value;
    }
  _Owner_field = Owner;
    get Owner_field() {
        return this._Owner_field;
    }
    set Owner_field(value) {
        this._Owner_field = value;
    }
  _Project_Type_field = Project_Type;
    get Project_Type_field() {
        return this._Project_Type_field;
    }
    set Project_Type_field(value) {
        this._Project_Type_field = value;
    }
   _Priority_field = Priority;
    get Priority_field() {
        return this._Priority_field;
    }
    set Priority_field(value) {
        this._Priority_field = value;
    }
    _Account_Name = Account_New;
  get Account_Name() {
    return this._Account_Name;
  }
  set Account_Name(value) {
    this._Account_Name = value;
  }
    _Project_Status_field = Project_Status;
  get Project_Status_field() {
    return this._Project_Status_field;
  }
  set Project_Status_field(value) {
    this._Project_Status_field = value;
  }
}

