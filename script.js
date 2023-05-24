$(document).ready(function(){
    $('#un').click(function(){
        document.forms.affichage.value +=1;
    });
    $('#deux').click(function(){
        document.forms.affichage.value +=2;
    });
    $('#trois').click(function(){
        document.forms.affichage.value +=3;
    });
    $('#quatre').click(function(){
        document.forms.affichage.value +=4;
    });
    $('#cinq').click(function(){
        document.forms.affichage.value +=5;
    });
    $('#six').click(function(){
        document.forms.affichage.value +=6;
    });
    $('#sept').click(function(){
        document.forms.affichage.value +=7;
    });
    $('#huit').click(function(){
        document.forms.affichage.value +=8;
    });
    $('#neuf').click(function(){
        document.forms.affichage.value +=9;
    });
    $('#zero').click(function(){
        document.forms.affichage.value +=0;
    });
    $('#div').click(function(){
        document.forms.affichage.value += '/';
    });
    $('#mult').click(function(){
        document.forms.affichage.value += '*';
    });
    $('#plus').click(function(){
        document.forms.affichage.value += '+';
    });
    $('#moins').click(function(){
        document.forms.affichage.value += '-';
    });
    $('#virgule').click(function(){
        document.forms.affichage.value += '.';
    });
    $('#C').click(function(){
        document.forms.affichage.value = '';
    });
    $('#résultat').click(function(){
        document.forms.affichage.value = 
        eval(document.forms.affichage.value);
    });
});