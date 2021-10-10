

**Infrastructure**

<img width="1324" alt="1_Infra" src="https://user-images.githubusercontent.com/25478952/136712998-9051ab35-ee7d-44f7-9b35-dcc4d365940e.png">





**SSO Application in GCP**

    **Design Overview :**

        1. GCP OAUTH 

            - OAUTH Tokken Generated for Web Application
            - OAUTH consent screen configured with profile and email as scope
            - Application domain url configured as local scope only (http://localhost:3000)
            - OAUTH redirection URI configured to redirect to application (http://localhost:3000/login) based on the login success


        2. Simple Node JS Application
            - Application explains 2 ways to use single sign detailed below

            A. Using **Passport Wrapper **: 
                passport node module which is a wrapper around single sign on 
                    User launches (http://localhost:3000), URI is redirected to GCP Metadata Server in which the Single Sign on consent page is configured. GCP Metadata   server redirects to application uri /login which renders an image
            B. Using GCP Base Modules **(platform.js)**
                Application launching through index.html and user clicks sign-on. On click functions triggered the request to Google Metadata server and the text in the screen is changed to display authentication



**Application Flow**

![sso](https://user-images.githubusercontent.com/25478952/136420468-3a237335-9ba7-4872-bcdd-d89a75764345.jpg)




**QUESTIONS**

<img width="739" alt="2_Questions" src="https://user-images.githubusercontent.com/25478952/136713035-69f6e28e-3988-40c4-afd6-be3721359adc.png">

<img width="740" alt="3_Questions" src="https://user-images.githubusercontent.com/25478952/136713047-a1ea520d-6383-41e4-9a56-121c3beeb63e.png">

<img width="751" alt="4_Queastions" src="https://user-images.githubusercontent.com/25478952/136713050-cca256b8-d87a-4fc6-8ec2-26e60f95ad0f.png">

<img width="743" alt="5_Questions" src="https://user-images.githubusercontent.com/25478952/136713054-906f5db9-4278-4474-b889-3d92cd7bbbbe.png">



