import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
})
export class DatePickerComponent implements OnInit {
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  showDatepicker = false;
  datepickerValue!: string;
  month!: number;
  year!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];
  constructor() {}
  @Output() datepickerValueChange: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }
  
  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue = new Date(
      this.year,
      this.month,
      today.getDate()
    ).toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    this.datepickerValueChange.emit(this.datepickerValue); 

  }

  isToday(date: number): boolean {
    return this.datepickerValue === new Date(this.year, this.month, date).toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  isDateSelected(date: number): boolean {
    return this.isToday(date);
  }
  
  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    // this.datepickerValue = selectedDate.toDateString();
    this.datepickerValue = selectedDate.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    this.showDatepicker = false;
    this.datepickerValueChange.emit(this.datepickerValue); 
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  trackByIdentity = (index: number, item: any) => item;
 
  
}
