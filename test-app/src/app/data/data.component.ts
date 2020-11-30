import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  dataForm: FormGroup;
  // Regular expression to match a url http/https
  urlRegex =  '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  // urlRegx =  '[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)x';
  // If https required
  // urlRegx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  // nameRegex = "^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$";
  
  constructor(private firestore: AngularFirestore, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      name: [ null, Validators.required],
      url: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(this.urlRegex)
          ])
        ]
    });
  }
  saveUrl(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("savedUrls")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }
  submit() {
    if (!this.dataForm.valid) {
      return;
    }
    this.saveUrl(this.dataForm.value);
  }

}
