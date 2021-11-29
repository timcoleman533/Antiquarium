import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Message } from "../models/message-model";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent {
    messageForm:FormGroup = new FormGroup ({
        name: new FormControl(),
        phoneNumber: new FormControl(),
        email: new FormControl('',[
            Validators.required,
            Validators.email
        ]),
        message: new FormControl('',[
            Validators.required,
        ])
    })

    errorMessage:string = '';

    saveMessage() {
        const name = this.messageForm.get('name')?.value;
        const phoneNumber = this.messageForm.get('phoneNumber')?.value;
        const email = this.messageForm.get('email')?.value;
        const messageText = this.messageForm.get('message')?.value

        const message:Message = new Message();
        message.name = name;
        message.phoneNumber = phoneNumber;
        message.email = email;
        message.message = messageText;

        console.log(message);
    }

    checkValid(name:string, name2:string) {
        const control = this.messageForm.get(name);
        const control2 = this.messageForm.get(name2);
        let invalid:boolean = false;
        if ((control?.dirty || control2?.dirty) && control?.errors) {
            invalid = true;
            this.errorMessage = 'Please enter a valid email';
            if (control?.hasError('required')) {
                this.errorMessage = 'The email field is required'
            }
            else if (control?.hasError('email')) {
                this.errorMessage = 'Please enter a valid email address'
            }
        }
        if ((control2?.dirty || control?.dirty) && control2?.errors) {
            invalid = true;
            this.errorMessage = 'Please enter a valid message';
            if (control2?.hasError('required')) {
                this.errorMessage = 'The message field is required'
            }
        }
        return invalid;
    }
}