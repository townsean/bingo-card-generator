import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class BingoCardService {
    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl('./src');
        });
        
        this.http = http;
    }
    
    getAllBingoThemes() {
        return this.http.fetch('/bingo-themes.json')
                        .then(response => response.json())
                        .then(themes => this.themes = themes);
    }
    
    getBingoThemeById(id) {
        let promise = new Promise((resolve, reject) => {
            this.getAllBingoThemes()
                .then(themes => { 
                    for (let theme of themes) {            
                        if( theme.id === id ) {           
                            resolve(theme);
                        }
                    }
                })
        });
        
        return promise;   
    }
    
    getBingoCardData(words) {
        
    }
}