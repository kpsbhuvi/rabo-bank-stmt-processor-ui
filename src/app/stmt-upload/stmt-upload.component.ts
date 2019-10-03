import { Component, OnInit } from '@angular/core';

import { StmtUploadService} from '../stmt-upload.service';
import {FailedStmts} from '../FailedStmts';
@Component({
  selector: 'app-stmt-upload',
  templateUrl: './stmt-upload.component.html',
  styleUrls: ['./stmt-upload.component.css']
})
export class StmtUploadComponent implements OnInit {

  constructor(private stmtuploadservice: StmtUploadService) { }

  ngOnInit() {
  }

  fileToUpload: File = null;
  failedstmts: FailedStmts [];
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  //private failedstmt: FailedstmtsComponent;
  uploadFileToActivity() {
    this.stmtuploadservice.postFile(this.fileToUpload).subscribe(data => {
      this.failedstmts = data as FailedStmts[];
      }, error => {
        console.log(error);
      });
  }

}

