import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {Form, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.formBuilder.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: ''
  })

    constructor(private formBuilder: FormBuilder) {
    }

    async send() {
    emailjs.init('w2NYL33elxdcrnp_2')
     let response = await emailjs.send("service_a6q7zls","template_m1w86te",{
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });

      alert("Message has been sent.");
      this.form.reset();
    }

}
