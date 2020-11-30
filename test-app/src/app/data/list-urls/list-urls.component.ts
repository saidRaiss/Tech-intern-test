import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-urls',
  templateUrl: './list-urls.component.html',
  styleUrls: ['./list-urls.component.css']
})
export class ListUrlsComponent implements OnInit {

  urls: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  getUrls(): void{
    this.firestore
    .collection("savedUrls")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.urls.push(doc.data());
      });
    });
  }

}
