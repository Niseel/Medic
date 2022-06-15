import { BaseComponent } from 'src/app/shared/components/base.component';
import { Component } from '@angular/core';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { Router } from '@angular/router';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['../../../assets/styles/components/doctor-page/doctor.scss'],
})
export class DoctorComponent extends BaseComponent {
  public items: DoctorModel.DoctorInfo[] = [];
  public display: boolean = false;

  constructor(private doctorService: DoctorService, private router: Router) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.getDoctors();
  }

  onDestroy(): void {}

  private getDoctors(): void {
    const me = this;
    me.doctorService
      .getDoctors()
      .pipe(takeUntil(me.destroy$))
      .subscribe((res) => {
        me.items = res;
        console.log(me.items);
      });
  }

  showAddDoctorDialog() {
    const me = this;
    me.display = true;
  }
  showAddDoctor() {
    const me = this;
    me.router.navigate(['/doctors/add']);
  }

  onDialogClose(event: any) {
    const me = this;
    me.display = event;
  }

  // public doctors: Doctor[] = [];
  // private _url = '../../../assets/data/doctors.json';

  // public display: boolean = false;

  // getDoctor(): Observable<Doctor[]> {
  //   return this.http.get<Doctor[]>(this._url);
  // }
  // constructor(private http: HttpClient, private router: Router) {
  //   this.getDoctor().subscribe((data) => {
  //     this.doctors = data;
  //   });
  // }
  // ngOnInit() {}

  // showAddDoctorDialog() {
  //   const me = this;
  //   me.display = true;
  // }
  // showAddDoctor() {
  //   const me = this;
  //   me.router.navigate(['/doctors/add']);
  // }

  // onDialogClose(event: any) {
  //   const me = this;
  //   me.display = event;
  // }
}
