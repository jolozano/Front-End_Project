$( document ).ready(function() {
    var $containerDiv1 = $("<div id='container1'></div>");

    $containerDiv1.appendTo("body");

    var $containerDiv2 = $("<div id='container2'></div>");

    $containerDiv2.appendTo("body");

    var $searchButton = $("button");

    // function pressedReturn(event) {
    //     event.target
    // }

    $searchButton.click(function(){

        $containerDiv1.empty();

        $containerDiv2.empty();

        var $inputBox = $("#searchBox").val();

        $.get(`https://swapi.dev/api/people/?search=${$inputBox}`, (data) => {
            const searchResults = data.results;
            console.log(searchResults);

            let $infoDiv = $("<div>Click on Name for More information.</div>");
            $infoDiv.appendTo($containerDiv1);

            for (let index of searchResults) {
                let $fullName = index.name;
                let $resultDiv = $(`<div class='resultDiv'>${$fullName}</div>`);
                console.log($fullName)
                $resultDiv.appendTo($containerDiv1);
                $resultDiv.on('click', function() {makeDiv(index)});
            };

            function makeDiv(index) {
                console.log(index)
                $containerDiv2.empty();
                for (let key in index) {
                let $infoCard = $(`<div>${key}: ${index[key]}</div>`);
                $infoCard.appendTo($containerDiv2);
                };
            }

        });
    });
})