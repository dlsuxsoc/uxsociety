$(document).ready(() => {
  $.each(events, (i, o) => {
    if (i % 3 == 0) {
      let event_banner_group = $("<div></div>").addClass("event-banner-group")
        .addClass("carousel-cell");

      let event_1 = $("<div style='background-image: url(\"" + o.Photo + "\"), linear-gradient(189.91deg, rgba(52, 188, 155, 0.95) 0%, rgba(44, 186, 194, 0.95) 100%);'></div>");
      let event_1_details = $("<div></div>").addClass("event-details")
        .append(
          $("<div></div>").append("<h3 class='title'>" + o.Event + "</h3>")
            .append("<span>" + o.Date + "</span>")
        );
      event_1.append(event_1_details);
      
      let event_2 = $("<div></div>");
      if (events.length - i >= 2) {
        let event_2_details = $("<div></div>").addClass("event-details")
          .append(
            $("<div></div>").append("<h3 class='title'>" + events[i + 1].Event + "</h3>")
              .append("<span>" + events[i + 1].Date + "</span>")
          );
        
        event_2.css("background-image", "url(\"" + events[i + 1].Photo + "\")");
        event_2.append(event_2_details);
      }

      let event_3 = $("<div></div>");
      if (events.length - i >= 3) {
        let event_3_details = $("<div></div>").addClass("event-details")
          .append(
            $("<div></div>").append("<h3 class='title'>" + events[i + 2].Event + "</h3>")
              .append("<span>" + events[i + 2].Date + "</span>")
          );
        
        event_3.css("background-image", "url(\"" + events[i + 2].Photo + "\")");
        event_3.append(event_3_details);
      }
      
      let event_2_3 = $("<div></div>").addClass("event-banner-holder");

      event_2_3.append(event_2)
          .append(event_3);

      event_banner_group
        .append(event_1)
        .append(event_2_3);
      
      $("#event-banners").append(event_banner_group);
    }
  })

  $('#event-banners').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
})