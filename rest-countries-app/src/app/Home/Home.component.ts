import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Countries } from '../classes/class';
import { Router } from '@angular/router';

@Component({
    selector: 'app-Home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit{

    // constructor(private router:Router){
    //     this.router.navigate(['/country'])
    // }

ngOnInit(): void {
}

// 

}