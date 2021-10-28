

const ValidationErrorThrow = (data)=>{
  
    let errors = {}
    if(!data.Clanname.trim()){
        errors.Clanname = "Please Fill Clan Name Field."
    } 
    if(!data.ClanTag.trim()){
        errors.ClanTag = "Please Fill Clan Tag Field."
    }
    if(!data.ClanLogo){
        errors.ClanLogo = "Please Select You Clan Logo Field."
    }
    if(!data.IglName.trim()){
        errors.IglName = "Please Fill Igl Name Field."
    }
    if(!data.IglId.trim()){
        errors.IglId = "Your Igl ID Field Is Empty."
    }
    if(!data.Whatsapp.trim()){
        errors.Whatsapp = "Please Fill Whatsapp Input Field."
    }
    if(!data.Player2Name.trim()){
        errors.Player2Name = "Player 2 Name Field Is Empty."
    }
    if(!data.Player2Id.trim()){
        errors.Player2Id = "Player 2 Id Field Is Empty."
    }
    if(!data.Player3Name.trim()){
        errors.Player3Name = "Player 3 Name Field Is Empty."
    }
    if(!data.Player3Id.trim()){
        errors.Player3Id = "Player 3 Id Field Is Empty."
    }
    if(!data.Player4Name.trim()){
        errors.Player4Name = "Player 4 Name Field Is Empty."
    }
    if(!data.Player4Id.trim()){
        errors.Player4Id = "Player 4 Id Field Is Empty."
    }
    if(!data.Player5Name.trim()){
        errors.Player5Name = "Player 5 Name Field Is Empty."
    }
    if(!data.Player5Id.trim()){
        errors.Player5Id = "Player 5 Id Field Is Empty."
    }
    if(!data.PaymentScreenshot){
        errors.PaymentScreenshot = "Please Select The Payment Screenshot"
    }

    return errors
   
    

}

export default ValidationErrorThrow