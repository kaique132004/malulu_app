import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../srv/authentication.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  id: any;

  products$: Observable<any[]> | undefined;



  constructor(private fg: AuthenticationService, private router: ActivatedRoute, private afs: AngularFirestore) {
    
  }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.products$ = this.fg.getProductsDet(this.id)
  }


  
}
