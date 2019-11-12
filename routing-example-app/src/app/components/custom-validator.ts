import { ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

export class CustomValidator{
    static forbiddenNames(forbiddenNameRegEx: RegExp): ValidatorFn{
        return (control: AbstractControl): {[Key: string]: any} | null => {
            const forbidden = forbiddenNameRegEx.test(control.value);

            return forbidden ? {'forbiddenName': {value: control.value}}: null;
        }
    }

    static checkIfEmail(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|hotmail|icloud|google)\.com$/.test(control.value);
            return email ? null : { 'notEmail': { value: control.value } };
        }
    }

    static checkIfEmailNotTakenSignUp(userService : UserService): AsyncValidatorFn {
        return (control: AbstractControl) : Observable<ValidationErrors | null> => {
            const email = control.value.toLowerCase()
            return userService.checkEmailNotTaken(email).pipe(
                map(() => {
                    return null ;
                }),
                catchError(()=> of({ 'emailTaken' : { value : true }}))
            )
        }
    }
    

    static checkIfEmailTakenLogin(userService : UserService): AsyncValidatorFn {
        return (control: AbstractControl):  Observable<{[key: string]: any} | null> => {
            const email = control.value.toLowerCase()
            return userService.checkEmailNotTaken(email).pipe(
                map(() => {
                    return { 'emailNotExist' : { value : true }}
                }),
                catchError(()=> of(null))
            )
        }
    }
}