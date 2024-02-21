import { Component, OnInit, NgModule } from '@angular/core';
import { SneakersService } from '../services/sneakers/sneakers.service';
import { CommonModule } from '@angular/common';
import { Sneakers } from '../shared/models/Sneakers';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit {
  
  sneakers:Sneakers[]=[];
  constructor(private sneakersService:SneakersService){}

  ngOnInit(): void {
    this.sneakers = this.sneakersService.getAll();
  }
}
