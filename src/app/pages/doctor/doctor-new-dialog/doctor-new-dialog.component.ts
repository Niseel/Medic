import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';

interface OnType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-new-doctor-dialog',
  templateUrl: './doctor-new-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/components/doctor-page/new-doctor.scss',
  ],
})
export class DoctorNewDialogComponent implements OnInit {
  @Input() display!: boolean;
  @Output() displayChange = new EventEmitter();

  public multiple: boolean = false;
  public maxFileSize!: number;

  statusOptions!: any[];
  statusDefault: string = 'online';

  derpartments!: OnType[];
  // selectedDerpartmentCode?: string;

  positions!: OnType[];
  // selectedPositionCode?: string;

  externalFiles!: File[];
  uploadedFile?: File[];

  private phoneRegex: string = '(84|0[3|5|7|8|9])+([0-9]{8})\\b';

  private emailRegex =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

  private destroy$ = new Subject<void>();

  public fieldNameKeys = {
    id: 'id',
    status: 'status',
    avatar: 'avatar',
    firstName: 'firstName',
    lastName: 'lastName',
    position: 'position',
    derpartment: 'derpartment',
    phone: 'phone',
    mail: 'mail',
  };

  private messageErrors: any = {
    required: 'Please fill in the information.',
    minlength: 'Please enter more characters',
    phoneValidator: 'Phone number is not valid',
    mailValidator: 'Email is not valid',
  };

  public formDoctorGroup!: FormGroup;

  constructor(
    public builder: FormBuilder,
    private primeNGConfig: PrimeNGConfig
  ) {
    const me = this;

    me.statusOptions = [
      { label: 'Online', value: 'online' },
      { label: 'Busy', value: 'busy' },
      { label: 'Offline', value: 'offline' },
    ];

    me.derpartments = [
      { name: 'MBBS, M.D of Medicine', code: 'DP-01' },
      { name: 'MBBS, M.D of Dentist', code: 'DP-02' },
    ];

    me.positions = [
      { name: 'Cardiologist', code: 'Pos-01' },
      { name: 'Pediatrics', code: 'Pos-02' },
      { name: 'Radiologistgist', code: 'Pos-03' },
      { name: 'Psychaiatrist', code: 'Pos-04' },
      { name: 'Neurologist', code: 'Pos-05' },
      { name: 'Dentist', code: 'Pos-06' },
      { name: 'Medicine', code: 'Pos-07' },
    ];
  }

  ngOnInit() {
    const me = this;
    me.BuildForm();

    this.primeNGConfig.ripple = true;
  }

  private BuildForm() {
    const me = this;
    me.formDoctorGroup = me.builder.group({
      [me.fieldNameKeys.firstName]: [
        '',
        [Validators.required, Validators.minLength(2)],
      ],
      [me.fieldNameKeys.lastName]: [
        '',
        [Validators.required, Validators.minLength(2)],
      ],
      [me.fieldNameKeys.status]: [
        me.statusOptions[0].value,
        [Validators.required],
      ],
      // [me.fieldNameKeys.avatar]: ['', [Validators.required]],
      [me.fieldNameKeys.position]: [
        me.positions[0].code,
        [Validators.required],
      ],
      [me.fieldNameKeys.derpartment]: [
        me.derpartments[0].code,
        [Validators.required],
      ],
      [me.fieldNameKeys.phone]: [
        '',
        [
          Validators.required,
          me.customCorrectField(
            me.fieldNameKeys,
            me.phoneRegex,
            'phone',
            'phoneValidator'
          ),
        ],
      ],
      [me.fieldNameKeys.mail]: [
        '',
        [
          Validators.required,
          me.customCorrectField(
            me.fieldNameKeys,
            me.emailRegex,
            'mail',
            'mailValidator'
          ),
        ],
      ],
    });
  }

  isInvalidControl(controlName: string): boolean {
    const me = this;
    const control = me.formDoctorGroup.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty);
  }

  //messageErrors

  getErrorByField(controlName: string): string[] {
    const me = this;
    // console.log(me.formDoctorGroup.get(controlName));

    const errorObj = me.formDoctorGroup.get(controlName)?.errors;
    if (!errorObj) {
      return [];
    }
    const errorKeys = Object.keys(errorObj || {});
    if (errorKeys.length === 0) {
      return [];
    }

    const listMsg = errorKeys.reduce((res: string[], key: string) => {
      const msg = me.messageErrors[key];
      res.push(msg);
      return res;
    }, []);
    // get message
    return listMsg;
  }

  private customCorrectField(
    fieldNameKeys: any,
    regex: string,
    controlName: string,
    messageErrorKey: string
  ) {
    return (control: AbstractControl) => {
      if (!!control.parent?.controls) {
        const _formGroup = control.parent as FormGroup;
        const currentControl = _formGroup.get(fieldNameKeys[controlName]);
        const keyValidator = messageErrorKey;

        const reg = new RegExp(regex);
        if (reg.test(currentControl?.value)) {
          return null;
        }
        return { [keyValidator]: true };
      }
      return null;
    };
  }

  onClose() {
    const me = this;
    me.displayChange.emit(false);
  }

  onSubmit() {
    const me = this;
    me.displayChange.emit(false);

    const isValid = me.formDoctorGroup.valid;

    if (!isValid) {
      console.error(`Form is Invalid.`);
      return;
    }

    const valueFormRaw = me.formDoctorGroup.getRawValue();
    const valueAll = me.formDoctorGroup.value;

    console.log(valueFormRaw);
    // console.log(valueAll);
  }

  ngOnDestroy() {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
    me.displayChange.unsubscribe();
  }
}
