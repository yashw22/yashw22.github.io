var bgIconList = ["github_b.png", "gmail_b.png", "insta_b.png", "linkedin_b.png", "whatsapp_b.png" ];

// 30 icons needed
var icon_row ="<div>";
for(var rep=0; rep<6; rep++){
    for (let i = 0; i < bgIconList.length; i++)
    icon_row += '<img src="icons/dock_icons/' + bgIconList[i] + '">';
}
icon_row += "</div>";
$('.bg_row').html(icon_row + icon_row);

var row = $('.bg_section').html(), bg = "";
for(var i=0; i<24; i++) bg += row;
$('.bg_section').html(bg);


data.education.forEach(function (data, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    logo += '<img src="icons/logos/' + data.logo + '">';
    logo += '</div>';
    logo += '</div>';

    var content = '<div class="timeline_item">';
    content += '<div class="card_info">';
    if(idx%2===0) content += logo;
    content += '<div class="card_date">' + data.from + " - " + data.to + '</div>';
    if(idx%2!==0) content += logo;
    content += '</div>';

    content += '<div class="card_item">';
    content += '<div class="card_title">' + data.school + '</div>';
    content += '<div class="card_loc">' + data.location + '</div>';
    content += '<div class="inner_card_date">' + data.from + " - " + data.to + '</div>';
    content += '<div class="card_content">' + data.degree + ", " + data.major + '</div>';
    content += '</div>';
    content += '</div>';

    $('#education').find('.timeline_list').append(content);
});

data.internships.forEach(function (data, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    // logo += '<img src="icons/logos/' + data.logo + '">';
    logo += '</div>';
    logo += '</div>';

    var ls = '<ul>';
    data.desc.forEach(function (item){
        ls += '<li>' + item + '</li>';
    });
    ls += '</ul>'

    var content = '<div class="timeline_item">';
    content += '<div class="card_info">';
    if(idx%2===0) content += logo;
    content += '<div class="card_date">' + data.from + " - " + data.to + '</div>';
    if(idx%2!==0) content += logo;
    content += '</div>';

    content += '<div class="card_item">';
    content += '<div class="card_title">' + data.company + '</div>';
    content += '<div class="card_loc">' + data.location + '</div>';
    content += '<div class="inner_card_date">' + data.from + " - " + data.to + '</div>';
    content += '<div class="card_content">' + ls + '</div>';
    content += '</div>';
    content += '</div>';

    $('#internships').find('.timeline_list').append(content);
});

data.projects.forEach(function (data, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    // logo += '<img src="icons/logos/' + data.logo + '">';
    logo += '</div>';
    logo += '</div>';

    var ls = '<ul>';
    data.desc.forEach(function (item){
        ls += '<li>' + item + '</li>';
    });
    ls += '</ul>'

    var content = '<div class="timeline_item">';
    content += '<div class="card_info">';
    if(idx%2===0) content += logo;
    content += '<div class="card_date">' + data.from + " - " + data.to + '</div>';
    if(idx%2!==0) content += logo;
    content += '</div>';

    content += '<div class="card_item">';
    content += '<div class="card_title">' + data.title + '</div>';
    content += '<div class="inner_card_date">' + data.from + " - " + data.to + '</div>';
    content += '<div class="card_content">' + ls + '</div>';
    content += '</div>';
    content += '</div>';

    $('#projects').find('.timeline_list').append(content);
}); 