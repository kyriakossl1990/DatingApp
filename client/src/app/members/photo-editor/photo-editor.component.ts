import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() member!: Member;
  uploader!:FileUploader;
  hasBaseDropzoneOvern= false;
  constructor() { }

  ngOnInit(): void {
  }

}
