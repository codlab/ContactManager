import ContactsAPI from "react-native-contacts";

class Contacts {

  cache() {
    return new Promise( (resolve, reject) => {
      resolve(this._cache);
    });
  }

  list() {
    return new Promise( (resolve, reject) => {

        ContactsAPI.getAll( (err, contacts) => {
          if (err === 'denied') {
            reject(err);
          } else {

            contacts = contacts.filter(contact => this.isValid(contact));
            this._cache = contacts;
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

export default new Contacts();
