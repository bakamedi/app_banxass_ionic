import { Injectable } from '@angular/core';

import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/*
  Generated class for the PdfStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PdfStorageProvider {

  private pdfObj = null;
  private title: string = "AGROSOFT";
  private dateNow: string = new Date().toTimeString();
  private docFile;
  private index = "#";
  private column1 = "CODE_PACKAGING";
  private column2 = "CODE_TAG";
  private column3 = "WEIGHT";
  private column4 = "REGISTER_DATE";


  constructor(
    private file: File,
    private fileOpener: FileOpener
  ){

  }

  public setInstacePdf(userName: string): void{
    this.docFile = {
			content:[
				{ text: this.title, style: 'header' },
				{ text: this.dateNow, alignment: 'right'},
				{ text: 'Hecho por '+userName+'', style: 'subheader' },
				{ table: {
						headerRows: 1,
						widths: [ 20, 'auto', 100, 50, 'auto' ],
		
						body: [
							[ 
								{ text: this.index, bold: true}, 
								{ text: this.column1, bold: true},
								{ text: this.column2, bold: true},
								{ text: this.column3, bold: true},
								{ text: this.column4, bold: true}
							]
						]
					}
				}
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true
				},
				subheader: {
					fontSize: 14,
					bold: true,
					margin: [0, 15, 0, 0]
				},
				row: {
					italic: true,
					alignment: 'center',
					width: '50%'
				}
			}
    };
  }

  private createRowOfTable(searchResult): void{
    for(let i = 0; i < searchResult.length ; i++){
			let rowTable = [
				''+i,
				searchResult[i].CODE_PACKAGING,
				searchResult[i].CODE_TAG,
				searchResult[i].WEIGHT,
				searchResult[i].REGISTER_DATE
			];
			this.docFile.content[3].table.body.push(rowTable);
    }
    this.pdfObj = pdfMake.createPdf(this.docFile);
  }

  private cleanDoc(): void{
    this.pdfObj = null;
    this.docFile = null;
  }

  opened(): void{
    this.pdfObj.getBuffer((buffer) => {
      let blob = new Blob([buffer], { type: 'application/pdf' });
      // Save the PDF to the data Directory of our App
      this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
        // Open the PDf with the correct OS tools
        this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
      })
    });
  }

  download(searchResult): void{
    this.createRowOfTable(searchResult);
    this.pdfObj.download();
    this.cleanDoc();
  }

}
