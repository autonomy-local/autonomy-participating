import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { setDoc } from '@angular/fire/firestore';
import { Timestamp } from '@firebase/firestore';
@Component({
  selector: 'autonomy-participating-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css'],
})
export class AccountRegisterComponent {
  constructor(private auth: AngularFireAuth, private store: AngularFirestore){}
  ngOnInit() {
    this.auth.onAuthStateChanged(async (user) => {
      if (!user){
        // not login user state and func
      }else{
        const userDoc = await this.store.firestore.collection('users').doc(user.uid).get();
        if(!userDoc.exists){
          await userDoc.ref.set({
            uid: user.uid,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            displayName: user.displayName,
            prociderId: user.providerData[0]?.providerId,
            created_at: Timestamp.now()
          })
        }
      }
    })
  }
}
