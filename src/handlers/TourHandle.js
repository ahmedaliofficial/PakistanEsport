import React from "react";
import ValidationErrorThrow from "./ValidationsErrors";
import Keys from './keys'
import axios from "axios";
const TourHandler = ()=>{

    const [ShowModaler,SetShowModaler] = React.useState(false)
    const [token,SetToken] = React.useState('')
    const {TourRegKey} = Keys()
    
    const [Loading,SetLoading] = React.useState(false)
    const [AllowTournament,SetAllowTournament] = React.useState(false)
    const [FormValues,SetFormValues] = React.useState({
    Clanname:'',
    ClanTag:'',
    ClanLogo:'',
    IglName:'',
    IglId:'',
    Whatsapp:'',
    Player2Name:'',
    Player2Id:'',
    Player3Name:'',
    Player3Id:'',
    Player4Name:'',
    Player4Id:'',
    Player5Name:'',
    Player5Id:'',
    Player6Name:'',
    Player6Id:'',
    PaymentScreenshot:''
    })
    React.useEffect(() => {
        axios({
            method: "get",
            url: "https://www.softmeck.com/api/TournamentStatus",
          })
            .then(function (response) {
              //handle success
                
                let res = response.data
                
                SetAllowTournament(res.status)
              
            })
            .catch(function (response) {
              //handle error
              console.log(response)
        })
    }, [])
    const clearState = () => {
        SetShowModaler(false)
        SetLoading(false)
        SetFormValues({
            Clanname:'',
            ClanTag:'',
            ClanLogo:'',
            IglName:'',
            IglId:'',
            Whatsapp:'',
            Player2Name:'',
            Player2Id:'',
            Player3Name:'',
            Player3Id:'',
            Player4Name:'',
            Player4Id:'',
            Player5Name:'',
            Player5Id:'',
            Player6Name:'',
            Player6Id:'',
            PaymentScreenshot:''
        })
    }
    const [errors,seterrors] = React.useState({})
    const HandleChange = e=>{
        const {name,value} = e.target;
        SetFormValues({
            ...FormValues,
            [name]:value
        })
        seterrors(ValidationErrorThrow(FormValues))
    //   alert(TourRegKey)
    }
    const HandleChangeImage = e=>{
        const {name,files} = e.target;
        
        if(name=="ClanLogo"){
            SetFormValues({
                ...FormValues,
                ClanLogo:files[0]
            })
        }
        if(name=="PaymentScreenshot"){
            SetFormValues({
                ...FormValues,
                PaymentScreenshot:files[0]
            })
        }
        seterrors(ValidationErrorThrow(FormValues))
 
        
    }
   
    const RegisterTournament = (e)=>{
        e.preventDefault()
       
       
        window.grecaptcha.ready(function() {
            window.grecaptcha.execute('6LeukvgcAAAAACINhSppMdTKqeQBIWziSLq59_JM', {action: 'submit'}).then(function(token) {
             SetLoading(true)
             if(AllowTournament==true){
        if(FormValues.Clanname!='' && FormValues.ClanTag!='' && FormValues.ClanLogo!='' && FormValues.IglName!='' && FormValues.IglId!='' && FormValues.Whatsapp!='' && FormValues.Player2Name!='' && FormValues.Player2Id!='' && FormValues.Player3Name!='' && FormValues.Player3Id!='' && FormValues.Player4Name!='' && FormValues.Player4Id!='' && FormValues.Player5Name!='' && FormValues.Player5Id!=''  && FormValues.PaymentScreenshot!=''){
            let formData = new FormData()
            formData.append('Clanname',FormValues.Clanname)
            formData.append('ClanTag',FormValues.ClanTag)
            formData.append('ClanLogo',FormValues.ClanLogo)
            formData.append('IglName',FormValues.IglName)
            formData.append('IglId',FormValues.IglId)
            formData.append('Whatsapp',FormValues.Whatsapp)
            formData.append('Player2Name',FormValues.Player2Name)
            formData.append('Player2Id',FormValues.Player2Id)
            formData.append('Player3Name',FormValues.Player3Name)
            formData.append('Player3Id',FormValues.Player3Id)
            formData.append('Player4Name',FormValues.Player4Name)
            formData.append('Player4Id',FormValues.Player4Id)
            formData.append('Player5Name',FormValues.Player5Name)
            formData.append('Player5Id',FormValues.Player5Id)
            formData.append('Player6Name',FormValues.Player6Name)
            formData.append('Player6Id',FormValues.Player6Id)
            formData.append('PaymentScreenshot',FormValues.PaymentScreenshot)
            formData.append('SecKey',TourRegKey)
            formData.append('cpatchaToken',token)
            axios({
                method: "post",
                url: "https://softmeck.com/api/pakistanesportstournament",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
             
                    let resonsedata = response.data
                    if(resonsedata.save == true){
                        clearState()
                        SetShowModaler(true)
                        SetToken(resonsedata.token)
                        e.target.reset()
                    }
                    if(resonsedata.save == false){
                        alert(resonsedata.error)
                    }
                    console.log(response)
                    SetLoading(false)
                  
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
            });
        }
        else{
            alert("something Missing")
            seterrors(ValidationErrorThrow(FormValues))
            SetLoading(false)
        }
    }
    else{
        alert("Tournament Registration Close.")
    }
            })
          })
      }
    
          
       

    return{HandleChange,FormValues,HandleChangeImage,RegisterTournament,errors,ShowModaler,token,Loading,AllowTournament}
}
export default TourHandler