export namespace DoctorModel {
  export interface DoctorInfo {
    _id: string;
    status: string;
    avatar: string;
    firstName: string;
    lastName: string;
    position: string;
    derpartment: string;
    phone?: string;
    mail?: string;
  }
}

// export class Doctor {
//   _id!: string;
//   status!: string;
//   avatar!: string;
//   firstName!: string;
//   lastName!: string;
//   position!: string;
//   derpartment!: string;
//   phone!: string;
//   mail!: string;

//   constructor(dataInput: any) {
//     const me = this;
//     me._id = dataInput._id;
//     me.status = dataInput.status;
//     me.avatar = dataInput.avatar;
//     me.firstName = dataInput.firstName;
//     me.lastName = dataInput.lastName;
//     me.position = dataInput.position;
//     me.derpartment = dataInput.derpartment;
//     me.phone = dataInput.phone;
//     me.mail = dataInput.mail;
//   }
// }
