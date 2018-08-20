import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/internal/Observable";

// interface Note {
//     sname: string;
//     tags: string;
// }

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  constructor(private asf: AngularFirestore) { }

  notesCollection: AngularFirestoreCollection<any>;
  notes: Observable<any[]>;
  noteDoc: AngularFirestoreDocument<any>;
  note: Observable<any>;

  newId: string;
  newDescription: string;
  newIurl: string;
  newLink: string;
  newSname: string;
  newTags: string;
  newType: string;

  ngOnInit() {
    // this.notesCollection = this.asf.collection('products', ref => {
    //   return ref.orderBy('link', "desc").limit(2)
    // });
    // Можно добавить ещё один orderBy, тогда ангуляр предложит создать индекс.
    //  startAfter(1969)

      // this.notesCollection = this.asf.collection('products', ref => {
      //     return ref.where('tags','==', 'игрушка')
      // });

    //  >=, два where работают только с ==

      this.notesCollection = this.asf.collection('products')
      this.notes = this.notesCollection.valueChanges()

      this.noteDoc = this.asf.doc("products/"+this.newId)
      this.note = this.noteDoc.valueChanges()

  }

  updateContent(){
      this.noteDoc = this.asf.doc("products/"+this.newId)
      this.note = this.noteDoc.valueChanges()
    this.noteDoc.update({description: this.newDescription,
        iurl: this.newIurl,
        link: this.newLink,
        sname: this.newSname,
        tags: this.newTags,
        type: this.newType})
  }

}
