
!(function($) {
    "use strict";
    $.getStat = function(url, callback) {
        $.getJSON(url+'?callback=?',callback)
    }

    $(document).ready(function() {
        var url = 'https://api.github.com/repos/kubero-dev/kubero/releases'
        $.getStat(url, function(data){
            $("#releases").text(data.data.length)
        })
        var url = 'https://api.github.com/repos/kubero-dev/kubero/stargazers'
        $.getStat(url, function(data){
            $("#stars").text(data.data.length)
        })
        var url = 'https://api.github.com/repos/kubero-dev/kubero/contributors'
        $.getStat(url, function(data){
            $("#contributors").text(data.data.length)
        })
        var url = 'https://api.github.com/repos/kubero-dev/kubero/subscribers'
        $.getStat(url, function(data){
            console.log(data)
            $("#subscribers").text(data.data.length)
        })
    });

})(jQuery);

/**
https://api.github.com/repos/mms-gianni/klustair-frontend/contributors
https://api.github.com/repos/mms-gianni/klustair-frontend/stargazers
https://api.github.com/repos/mms-gianni/klustair-frontend/subscribers
https://api.github.com/repos/mms-gianni/klustair-frontend/releases
https://api.github.com/repos/mms-gianni/klustair-frontend/forks
https://api.github.com/repos/mms-gianni/klustair-frontend/stats/contributors
*/