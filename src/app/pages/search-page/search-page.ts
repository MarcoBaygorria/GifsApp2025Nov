import { Component, inject } from '@angular/core';
import { GifList } from "src/app/gifs/components/gif-list/gif-list";
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  gifService = inject(GifService)

  onSearch(query: string) {
    this.gifService.searchGifs(query);
  }
}
