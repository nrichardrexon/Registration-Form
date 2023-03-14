alert("Page Refreshed !!!!")

function ValidateForm() {
    // let x = document.forms["FillUp"]["Name"].value;
    // if(x == "") 
    // {
    //   alert("Name must be filled out");
    //   return false ;
    // }

    if( document.FillUp.Name.value == "" ) {
        alert( "Please provide your Name!" );
        document.FillUp.Name.focus() ;
        return false;
    }

    if( document.FillUp.Photo.value == "" ) {
        alert( "Please provide your Photograph!" );
        document.FillUp.Photo.focus() ;
        return false;
    }

    if( document.FillUp.DateofBirth.value == "" ) {
        alert( "Please provide your Date of Birth!" );
        document.FillUp.DateofBirth.focus() ;
        return false;
    }

    if( document.FillUp.IdentityProof.value == "" ) {
        alert( "Please provide your Identity Proof!" );
        document.FillUp.IdentityProof.focus() ;
        return false;
    }

    if( document.FillUp.MobileNumber.value == "" ) {
        var mobNo = ^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4};
        if(MobileNumber.value.match(mobNo))
          {
           return true;
          }
        else
          {
                alert( "Please provide your Mobile Number!" );
                document.FillUp.MobileNumber.focus() ;
          }     return false;
    }

    if( document.FillUp.Landline.value == "" ) {
        alert( "Please provide your Landline!" );
        document.FillUp.Landline.focus() ;
        return false;
    }

    if( document.FillUp.Department.value == "" ) {
        alert( "Please provide your Department!" );
        document.FillUp.Department.focus() ;
        return false;
    }

    if( document.FillUp.Year.value == "" ) {
        alert( "Please provide your Year!" );
        document.FillUp.Year.focus() ;
        return false;
    }

    if( document.FillUp.Sports.value == "" )  {
        alert( "Please provide your Sports!" );
        document.FillUp.Sports.focus() ;
        return false;
    }
    
    if( document.FillUp.Represent.value == "" ) {
        alert( "Please provide your Representation!" );
        document.FillUp.Represent.focus() ;
        return false;
    }
    
    if( document.FillUp.College.value == "" ) {
        alert( "Please provide your College!" );
        document.FillUp.College.focus() ;
        return false;
    }
    
    if( document.FillUp.EMailId.value == "" ) {
        alert( "Please provide your E-Mail ID!" );
        document.FillUp.EMailId.focus() ;
        return false;
    }
    
    if( document.FillUp.Password.value == "" ) {
        alert( "Please provide your Password!" );
        document.FillUp.Password.focus() ;
        return false;
    }
    
    if( document.FillUp.TimeofRegistration.value == "" ) {
        alert( "Please provide your Time of Registration!" );
        document.FillUp.TimeofRegistration.focus() ;
        return false;
    }
    
    if( document.FillUp.DateofRegistration.value == "" ) {
        alert( "Please provide your Date of Registration!" );
        document.FillUp.DateofRegistration.focus() ;
        return false;
    }
    
    return( true );






}
