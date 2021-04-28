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
    // var $testButton = $("<button class='test' id='tester'>Test</button>");
    // $testButton.appendTo("#searchDiv");

    // $testButton.on('click keypress',  enterInput);
    // function enterInput(event) {
    //     console.log(event)
    //     if (event.type == 'click' || event.keyCode == 13) {
    //         alert('it worked');
    //     }
    // }

    // // $( "body" ).on('keypress', enterInput);

    $search.on('keypress click', function(){

        $containerDiv1.empty();

        $containerDiv2.empty();

        $.get(`https://swapi.dev/api/people/?search=${getInputVal()}`, (data) => {
            const searchResults = data.results;

            let $infoDiv = $("<div>Click on Name for More information.</div>");
            $infoDiv.appendTo($containerDiv1);

            for (let index of searchResults) {
                let $fullName = index.name;
                let $resultDiv = $(`<div class='resultDiv'>${$fullName}</div>`);
                $resultDiv.appendTo($containerDiv1);
                $resultDiv.on('click', function() {makeDiv(index)});
            };

            function makeDiv(index) {
                $containerDiv2.empty();
                for (let key in index) {
                let $infoCard = $(`<div class='infoCard'><em style='color:#680c0a'>${key}:</em> ${index[key]}</div>`);
                $infoCard.appendTo($containerDiv2);
                };
            }

        });
    });
})