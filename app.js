$( document ).ready(function() {

    var $containerDiv1 = $("<div id='container1'></div>");

    $containerDiv1.appendTo("body");

    var $containerDiv2 = $("<div id='container2'></div>");

    $containerDiv2.appendTo("body");

    var $search = $("#searchDiv");

    function getInputVal() {
        let $text = $("#searchBox").val();
        return $text;
    };

    function emptyContainers() {
        $containerDiv1.empty();
        $containerDiv2.empty();
    };

    function makeInfoCard(obj) {
        $containerDiv2.empty();
        for (let key in obj) {
            let $infoCard = $(`<div class='infoCard'><em style='color:#000000'>${key}:</em> ${obj[key]}</div>`);
            $infoCard.appendTo($containerDiv2);
        };
    }

    $search.on('keypress click', function(){

        emptyContainers();

        $.get(`https://swapi.dev/api/people/?search=${getInputVal()}`, (data) => {
            let searchResults = data.results;
            emptyContainers();
            
            let $infoDiv = $("<div>Click on Name for More information.</div>");
            $infoDiv.appendTo($containerDiv1);

            for (let index of searchResults) {
                let $fullName = index.name;
                let $resultDiv = $(`<div class='resultDiv'>${$fullName}</div>`);
                $resultDiv.appendTo($containerDiv1);
                $resultDiv.on('click', function() {makeInfoCard(index)});
            };
        });
    });
})