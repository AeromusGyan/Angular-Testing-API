import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Editor from 'ckeditor5/build/ckeditor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public Editor: any = Editor;
  public htmlData: any = '';

  public ready = false;
  doc: any;

  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {

    console.log(Editor.EditorWatchdog);

  }

  public onReady(editor: any): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;

    parent.insertBefore(
      editor.ui.view.toolbar.element!,
      element
    );
  }

  public onChange({ editor }: any) {
    this.doc = this.sanitizer.bypassSecurityTrustHtml(this.htmlData);
    const data = editor.getData();
    console.log(editor);

    console.log(data);
  }
}
