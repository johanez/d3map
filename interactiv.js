.on("mousedown", function(d) {

                         console.log("mousedown: " + d._uuid);

//                         Store current mouse position with respect to the svg:rect
element
                         d.x0 = d3.svg.mouse(this);

//                         Add a rectangle to the svg:g element
                         d.selectRect = d3.select(this.parentNode)
                                .append("svg:rect")
                                .style("fill", "#999")
                                .style("fill-opacity", .5);

//                         ???
                         d3.event.preventDefault();
                 })
                 .on("mousemove", function(d) {

                         console.log("mousemove: " + d._uuid);

                         if (!d.getSelectRect()) {
                                 return;
                         }

                         console.log("mousemove: the selection rectangle exists");

//                         Store the current mouse position with respect to the svg:rect
element
                         d.x1 = d3.svg.mouse(this);

//                         Compute the corner coordinates
                         var minx = Math.min(d.x0[0], d.x1[0]),
                                 maxx = Math.max(d.x0[0], d.x1[0]),
                                 miny = Math.min(d.x0[1], d.x1[1]),
                                 maxy = Math.max(d.x0[1], d.x1[1]);

//                         Resize the selection rectangle
                         d.selectRect.attr("x", minx + 5)
                                 .attr("y", miny + 5)
                                 .attr("width", maxx - minx - 5)
                                 .attr("height", maxy - miny - 5);

                         d3.event.preventDefault();
                 })
                 .on("mouseup", function(d) {

                         console.log("mouseup: " + d._uuid);

                         if (!d.getSelectRect()) {
                                 return;
                         }

                         console.log("mouseup: the selection rectangle exists");

//                         Remove the svg:rect element
                     d.getSelectRect().remove();

//                     Set the selection rectangle field to null
                     d.selectRect = null;
                 }); 