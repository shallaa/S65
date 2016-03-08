var svg = $VG().css('border', '1px solid black')
               .viewBox(0, 0, 1000, 1000)
               .appendTo(document.body);
    svg.addPath()
       .stroke('black', 2, '10 5', 'square', 'round')
       .fill('none')
       .moveTo(100, 100)
       .lineTo(900, 900)
       .lineTo(100, 900)
       .qBezTo(200, 200, 900, 100)
       .close();

var g1 = svg.addGroup().stroke('red', 2).fill('none');

    g1.addLine().pos(100, 900, 900, 100);
    g1.addPath()
      .moveTo(100, 900)
      .qBezTo(800, 800, 900, 100);


var g2 = svg.addGroup().stroke('blue', 10, '1 15', 'round').fill('none');
    g2.addRect()
      .pos(10, 10, 980, 980)
      .radius(50);
    g2.addEllipse()
      .pos(800, 200, 400, 200)
      .css('transform', 'rotate(30deg)');

var line = $VG('<rect>').pos(200, 200, 100, 100)
                        .radius(10)
                        .appendTo(svg);

var text = $VG('<text>').pos(500, 500)
                        .fontSize('30pt')
                        .text('hello, world!')
                        .appendTo(svg);