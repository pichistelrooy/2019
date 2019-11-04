import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidator{
    static forbiddenNames(forbiddenNameRegEx: RegExp): ValidatorFn{
        return (control: AbstractControl): {[Key: string]: any} | null => {
            const forbidden = forbiddenNameRegEx.test(control.value);

            return forbidden ? {'forbiddenName': {value: control.value}}: null;
        }
    }
}