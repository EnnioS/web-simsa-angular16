import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { AlertService } from 'src/app/Components/alert/alert.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{

  submitted = false;
  tokenVisible: boolean = false;

  //form
  FormData:FormGroup;
  tituloAccion:string = "Submit";

  validationError : boolean = false;

  //alert optional
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

    //Email Pattern
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Send Email   
  successEmail!:string;
  notSuccessEmail!:string;
  errorSendEmail!:string;



  constructor(
    private builder:FormBuilder,
    private contact: EmailService, 
    public alert: AlertService, 
    private title:Title,
    private MetaTagService:Meta, 
    private CanonicalService: CanonicalSeoService) { 
    this.FormData = this.builder.group({
      first:['', Validators.required],
      last:[''],
      country:[''],
      email: ['', [Validators.compose([Validators.required, Validators.email,Validators.pattern(this.emailPattern)])]],
      phone:[''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      to: ['administracion@gruposimsacn.com']
    });
  }


  
  ngOnInit(): void {
    
   
   //METADATA

   this.title.setTitle('Contact | SIMSA');
   this.CanonicalService.createLinkForCanonicalURL();
   this.MetaTagService.updateTag(
      {name:'description', content: 'SIMSA es una empresa de lider en construcción ubicada estrtegicamente en varios paises de Centro America.'}
    );

  }

  onSubmit(formData:FormGroup){
    this.tokenVisible = true;
    this.sendEmail(formData);
};

  sendEmail(formData:FormGroup){
    if (this.FormData.valid){
      this.validationError = false;
      this.contact.SendEmail(formData).subscribe({
        next: (response) =>{
          if(response){
            console.log("sevice: Email enviado, respuesta: " + response);
            this.alertMessages(response)
            this.FormData.reset();
            
          }else{
            console.log("sevice: No hay respuesta, respuesta: " + response);
            this.alertMessages(response)
          }
        },
        error: (response) => {
          if(response){
            console.log("sevice: No hay respuesta, error: " + response);
            this.alertMessages(response)
          }
        }
      });
    }else{
      this.validationError = true;
    }
  }
 
  alertMessages(response:any):void{
    if(response){
      this.alert.success(this.successEmail, this.options);
    } else if(!response){
      this.alert.error(this.notSuccessEmail, this.options);
    } else{
      this.alert.info(this.errorSendEmail, this.options);
    }
  }
 

  //getters se están usando para validación de campos
  get first(){return this.FormData.get('first')}
  get email(){return this.FormData.get('email')}
  get subject(){return this.FormData.get('subject')}
  get message(){return this.FormData.get('message')}

}
