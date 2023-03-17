var icon_row ="<div>";
for(var rep=0; rep<2; rep++){
    for (let i = 0; i < data.bg_icon.length; i++)
        icon_row += '<img src="icons/bg_icons/' + data.bg_icon[i] + '">';
}
icon_row += "</div>";
$('.bg_row').html(icon_row + icon_row);

var row = $('.bg_section').html(), bg = "";
for(var i=0; i<24; i++) bg += row;
$('.bg_section').html(bg);


data.education.forEach(function (item, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    logo += '<img src="icons/logos/' + item.logo + '">';
    logo += '</div>';
    logo += '</div>';
    
    

    var content = '<div class="timeline_item">';
    content += '<div class="card_info">';
    if(idx%2===0) content += logo;
    content += '<div class="card_date">' + item.from + " - " + item.to + '</div>';
    if(idx%2!==0) content += logo;
    content += '</div>';

    content += '<div class="card_item">';
    content += '<div class="card_title">' + item.school + '</div>';
    content += '<div class="card_subtitle">' + item.location + '</div>';
    content += '<div class="card_role">' + item.degree + ", " + item.major + ' (' + item.grade + ')' + '</div>';
    content += '<div class="inner_card_date">' + item.from + " - " + item.to + '</div>';

    if('desc' in item){
        var ls = '<ul>';
        item.desc.forEach(function (item){
            ls += '<li>' + item + '</li>';
        });
        ls += '</ul>';
        content += '<div class="card_content">' + ls + '</div>';
    }

    content += '</div>';
    content += '</div>';

    $('#education').find('.timeline_list').append(content);
});

data.internships.forEach(function (item, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    logo += '<img src="icons/logos/' + item.logo + '">';
    logo += '</div>';
    logo += '</div>';

    var ls = '<ul>';
    item.desc.forEach(function (item){ ls += '<li>' + item + '</li>'; });
    ls += '</ul>';

    var content = '<div class="timeline_item">';
    content += '<div class="card_info">';
    if(idx%2===0) content += logo;
    content += '<div class="card_date">' + item.from + " - " + item.to + '</div>';
    if(idx%2!==0) content += logo;
    content += '</div>';

    content += '<div class="card_item">';
    content += '<div class="card_title">' + item.company + '</div>';
    content += '<div class="card_subtitle">' + item.location + '</div>';
    content += '<div class="card_role">' + item.role + '</div>';
    content += '<div class="inner_card_date">' + item.from + " - " + item.to + '</div>';
    content += '<div class="card_content">' + ls + '</div>';
    content += '</div>';
    content += '</div>';

    $('#internships').find('.timeline_list').append(content);
});

data.projects.forEach(function (item, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    // logo += '<img src="icons/logos/' + item.logo + '">';
    logo += idx + 1;
    logo += '</div>';
    logo += '</div>';

    var ls = '<ul>';
    item.desc.forEach(function (item){ ls += '<li>' + item + '</li>'; });
    ls += '</ul>';

    var content = '<div class="timeline_item">';
    content += '<div class="card_info">';
    if(idx%2===0) content += logo;
    content += '<div class="card_date">' + item.from + " - " + item.to + '</div>';
    if(idx%2!==0) content += logo;
    content += '</div>';

    content += '<div class="card_item">';
    content += '<div class="card_title">' + item.title + '</div>';
    content += '<div class="inner_card_date">' + item.from + " - " + item.to + '</div>';
    content += '<div class="card_content">' + ls + '</div>';
    content += '</div>';
    content += '</div>';

    $('#projects').find('.timeline_list').append(content);
}); 