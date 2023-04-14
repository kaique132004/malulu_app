import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as auth  from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', JSON.stringify(this.userData)!);
        JSON.parse(localStorage.getItem('user')!);
      }
    });
   }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    // retorna o token de acesso
    return credential.user!.getIdToken();
  }

  async login(email: string, password: string) {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
    // retorna o token de acesso
    return userCredential.user!.getIdToken();
  }

  async signup(email: string, senha: string, dados: Array<string>) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, senha)
    .then((res) =>{
      const user = res.user;
      this.afs.collection('users').doc(user?.uid).set(dados);
    }).catch(()=>{
      // Em caso de erro tratar aqui !!!
    })
  }

  async resetPassword(email: string) {
    await this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    this.afAuth.signOut().then(() =>{
      localStorage.removeItem('user');
      //this.router.navigate(['login']);
    });
  }

  // #################################################################################################

  getProducts(): Observable<any[]> {
    return this.afs.collection('products', ref => ref.where('status', '==', true)).valueChanges();
  }

  async getDetalhe(id: any): Promise<any> {
    return this.afs.collection('products', ref => ref.where('id', '==', id)).valueChanges();
    //return this.afs.collection('products').doc(id).get().toPromise()
  }

  getProductsDet(id: any): Observable<any[]>{
    return this.afs.collection('products', ref => ref.where('id', '==', id)).valueChanges();
  }
}
