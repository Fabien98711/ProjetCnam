$(document).ready(function(){

    function activeOnglet(indexOnglet) {
        /* desactive onglet precedemment actif */
        $(".menuDown li.active").removeClass("active");
        /* active onglet cliqué */
        $(".menuDown li:nth-child(" + (indexOnglet + 1) + ")").addClass("active");

        /* on cache tous les articles */
        $(".down article").hide();

        /* on affiche l'article correspondant à l'onglet cliqué */
        $(".down article:nth-of-type(" + (indexOnglet + 1) + ")").show();
    }

/*fait fonctionner les onglets du menu "what we do"*/
    $(".menuDown li").each(function (indexOnglet) {
        $(this).click(function() {
            activeOnglet(indexOnglet);
        });
    });

    activeOnglet(0);
    
/*fait fonctionner la pop in reseaux sociaux*/
    $("#facebookLogo").click(function(){
        $(".popIn").show();
        $("iframe").hide();
        $(".facebookPopIn").show();       
    })

    $("#twitterLogo").click(function(){
        $(".popIn").show();
        $("iframe").hide(); 
        $(".twitterPopIn").show();       
    })

    $("#googleLogo").click(function(){
        $(".popIn").show();
        $("iframe").hide(); 
        $(".googlePopIn").show();       
    })

    
    $(".closePopIn").click(function(){
        $(".popIn").hide(); 
    })
}); 