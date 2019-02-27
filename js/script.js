
$('#start').hide();
$('#quest').hide();

$('#btStart').click(function ()
{

        $('#quest').show();
        $('#start').hide();

});

for ($i=0; $i<=4; $i++)
{

        $("#quest"+[$i]).click(function ()
        {
                $('#quest').hide();
                $('#map').show();
        })
}


