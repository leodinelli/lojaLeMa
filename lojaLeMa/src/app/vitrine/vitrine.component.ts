import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public mensagem: string = "";
  public lista: Produto[] = [
    {codigo:1, nome:"Bateria", valor: 12800, descritivo: "Bateria preta", quantidade:1, cupom:"Leleo", keywords:"", marca:"Ludwig"},
    {codigo:2, nome:"Violão", valor: 5000, descritivo: "Violão marrom", quantidade:3, cupom:"Mathias", keywords:"", marca:"Taylor"},
    {codigo:3, nome:"Cuica", valor: 500, descritivo: "Muito daora", quantidade:10, cupom:"Leleo", keywords:"", marca:"BATUKA"}
  ];
} 
