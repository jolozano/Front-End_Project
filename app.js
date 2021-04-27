$( document ).ready(function() {
    var $containerDiv = $("<div id='container'></div>");

    $containerDiv.appendTo("body");

    var $containerDiv2 = $("<div id='container2'></div>");

    $containerDiv2.appendTo("body");

    var $searchButton = $("button");

    $searchButton.click(function(){

        $containerDiv.empty();

        $containerDiv2.empty();

        var $inputBox = $("#searchBox").val();

        $.get(`https://swapi.dev/api/people/?search=${$inputBox}`, (data) => {
            const searchResults = data.results;
            console.log(searchResults);

            let $infoDiv = $("<div>Click on Name for More information.</div>");
            $infoDiv.appendTo($containerDiv);

            for (let index of searchResults) {
                let $fullName = index.name;
                let $div = $(`<div>${$fullName}</div>`);
                console.log($fullName)
                $div.appendTo($containerDiv);
                $div.click(function() {makeDiv(index)});
            };

            function makeDiv(index) {
                console.log(index)
                $containerDiv2.empty();
                for (let key in index) {
                let $div2 = $(`<div>${key}: ${index[key]}</div>`);
                $div2.appendTo($containerDiv2);
                };
            }

        });
    });
})