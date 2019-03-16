import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  getCurrentYearsOfExperience(year) {
    return new Date().getFullYear() - year;
  }
}
