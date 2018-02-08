import ContactsAPI from "react-native-contacts";

export default class Contacts {

  list() {
    return new Promise( (resolve, reject) => {

        ContactsAPI.getAll( (err, contacts) => {
          if (err === 'denied') {
            reject(err);
          } else {

            contacts = contacts.filter(contact => this.isValid(contact));
            resolve(contacts);
          }
        });
    });
  }

  isValid(contact) {
    if(!contact) return false;
    if(contact.familyName == null || contact.familyName.length === 0)
      return false;
    if(contact.jobTitle == null || contact.jobTitle.length === 0)
      return false;

    return true;
  }
}
