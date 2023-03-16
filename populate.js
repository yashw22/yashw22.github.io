

data.education.forEach(function (data, idx){
    var logo = '<div class="card_logo_box">';
    logo += '<div class="card_logo">';
    logo += '<img src="dock_icons/' + "gmail_b.png" + '">';
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
    content += '<div class="card_content">' + data.degree + " in " + data.major + '</div>';
    content += '</div>';

    content += '</div>';

    $('#education').find('.timeline_list').append(content);
});



// var content = '<div class="timeline_item">';

// content += '<div class="card_info">';
// content += '<div class="card_logo_box">' + data.school + '</div>';
// content += '<div class="card_date">' + data.from + " - " + data.to + '</div>';
// content += '</div>';

// content += '<div class="card_item">';
// content += '<div class="card_title">' + data.school + '</div>';
// content += '<div class="card_content">' + data.degree + " in " + data.major + '</div>';
// content += '</div>';

// content += '</div>';

// $('#education').find('.timeline_list').append(content);


// <div class="timeline_item">
//     <div class="card_info">
//         <div class="card_logo_box">2021</div>
//         <div class="card_date">Season 13</div>
//     </div>
//     <div class="card_item">
//         <div class="card_title">My test season for the title Season 13</div>
//         <div class="card_content">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
//             eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
//             montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
//             pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
//             vel, aliquet nec, vulputate eget, arcu.
//         </div>
//     </div>
// </div>