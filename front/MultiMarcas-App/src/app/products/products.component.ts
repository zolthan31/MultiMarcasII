import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any = [];
  public productsFilter: any = [];
  widthImg = 100;
  marginImg = 2;
  showImage = true;
  widthImg2 = 200;
  widthImg1 = 1300;
  private _filtroLista = '';


  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.productsFilter = this.filtroLista ? this.filtrarProdutos(this.filtroLista) : this.products;
  }

  filtrarProdutos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.products.filter(
      (produto: { peca: string; marca: string;}) => produto.peca.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      produto.marca.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  alterarImagem() {
    this.showImage = !this.showImage;
  }

  public getProducts(): void {
    this.http.get('https://localhost:5001/api/products').subscribe(
      response => {
        this.products = response;
        this.productsFilter = this.products;
      },
      error => console.log(error)
    );
  }

}
