var geraEmail = {
    geraMensagem: function() {
        var email=document.getElementById('email').value.toString();
        var mensagem=geradorDeSenhas.gerarSenha()
        var link = 'mailto:'+email+'?&subject=Senha%20do%20seu%20cofre.&body=A%20sua%20senha%20é%20'+mensagem+'.%20Não%20compartilhe%20essa%20senha%20com%20ninguém.%20Utilize-a%20somente%20para%20desbloquear%20seu%20cofre%0D%0A%0D%0ACaso%20não%20reconheça%20esta%20mensagem,%20ignore-a.'
        
        window.open(link)
        
    }

}