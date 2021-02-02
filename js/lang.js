
    var parsedHref = document.location.href.split('/').pop();
    var MYGetArray = parsedHref.split('?').pop();
    var NavigationHref = document.location.href;

    function LoadArabic()
    {
        NavigationHref = NavigationHref.replace("html_EN","html_AR");
        window.location.replace(NavigationHref);
    }

    function LoadEnglish()
    {
        NavigationHref = NavigationHref.replace("html_AR","html_EN");
        window.location.replace(NavigationHref);
    }