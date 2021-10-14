import { LightningElement, api } from 'lwc';
import wordCloud2 from '@salesforce/resourceUrl/wordcloud2';
import { NavigationMixin } from 'lightning/navigation';
import { loadScript } from 'lightning/platformResourceLoader';

export default class wordCloudLayout extends NavigationMixin(LightningElement) {
  @api results;
  @api wordColumn;
  @api measureColumn;
  @api height;
  @api width;
  @api minTextSize;

  list = [];

  jsInitialized = false;

  renderedCallback() {
    if (this.jsInitialized) {
      return;
    }

    this.results.forEach((row) => {
      this.list.push([row[this.wordColumn], row[this.measureColumn]]);
    });

    loadScript(this, wordCloud2 + '/wordcloud2.js')
      .then(() => {
        this.jsInitialized = true;
        this.initializeWordCloud();
      })
      .catch((error) => {
        this.error = error;
      });
  }

  initializeWordCloud() {
    var canvas = this.template.querySelector('canvas.my_canvas');
    canvas.width = this.width.toString();
    canvas.height = this.height.toString();
    window.WordCloud.minFontSize = this.minTextSize.toString() + 'px';
    window.WordCloud(this.template.querySelector('canvas.my_canvas'), {
      list: this.list
    });
  }
}
