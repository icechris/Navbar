var kindle =[];
var audible =[];
var kindle =[];
var currentTab = "kindle";

$('document').ready(
    function(){
        $("ul#booktype li a").click(function(){

            $("ul#booktype li").each(function(){
                $(this).removeClass("active");
            });
            $(this).parent().addClass("active");
            $("#content h2").text(this.text);
            currenttab = this.text.toLowercase();
        });
    }
);
function getData(booktype){
    var bookurl = "datastorage/" + booktype +".json";
    $.getJSOn( bookurl, function(data){
        console.log("JSON Data: " + data);
    });
}
function getData(booktype){
    var bookurl = "datastorage/" + booktype + ".json";
    $.getJSON(bookurl, function(data){
        windown[booktype]=data.books;
        buildTable(data.books);
    })
}
function buildTable(books){
    var thml = '';
    for (var i = 0; i< books.length; i++){
        var book = books[i];
        thtml += '<tr>';
        thtml += '<td>' + book.title + '</td>';
        thtml += '<td>' + book.author + '</td>';
        thtml += '<td><img src= " ' + book.image + ' "/> </td>';
        thtml += '</tr>';
    }
    $('table#listing tbody').html(thtml);
}