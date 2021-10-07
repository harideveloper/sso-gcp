Sample application implementing the GCP SSO (Single Sign ON)


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


