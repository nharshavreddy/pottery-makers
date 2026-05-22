import { Component } from '@angular/core';

@Component({
  selector: 'app-pottery-classes',
  templateUrl: './pottery-classes.component.html',
  styleUrls: ['./pottery-classes.component.scss']
})
export class PotteryClassesComponent {
  showRegistration = false;

  classFeatures = [
    { icon: 'schedule', title: 'Flexible Timing', desc: 'Choose a schedule that works best for you' },
    { icon: 'groups', title: 'Small Batches', desc: 'Personal attention with limited batch sizes' },
    { icon: 'construction', title: 'All Materials Included', desc: 'Clay, tools, and firing — everything provided' },
    { icon: 'emoji_objects', title: 'Expert Instructors', desc: 'Learn from experienced pottery artisans' },
    { icon: 'card_giftcard', title: 'Take Home Creations', desc: 'Keep everything you make during the class' },
    { icon: 'family_restroom', title: 'All Ages Welcome', desc: 'Fun for kids, adults, and families alike' }
  ];

  toggleRegistration(): void {
    this.showRegistration = !this.showRegistration;
  }

  onFormSubmitted(): void {
    this.showRegistration = false;
  }
}
