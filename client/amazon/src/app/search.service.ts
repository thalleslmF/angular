import { Injectable } from '@angular/core';
import { Compra } from './compra';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  busca;
  compra:Compra;
  constructor() { }
}
