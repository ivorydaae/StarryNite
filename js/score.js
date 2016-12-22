    var chartParams = {
 "dom": "chartea2f27917e54",
"width":    800,
"height":    400,
"layers": [
 {
 "x": "Final",
"y": "Midterm",
"data": {
 "Major": [ "Finance", "Finance", "Finance", "Finance", "Finance", "Finance", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business", "International Business" ],
"SchoolNum": [ "b03703012", "b03703019", "b03703030", "b03703033", "b03703035", "b03703037", "b02704047", "b03704001", "b03704002", "b03704004", "b03704005", "b03704006", "b03704007", "b03704008", "b03704009", "b03704010", "b03704011", "b03704012", "b03704013", "b03704016", "b03704017", "b03704019", "b03704020", "b03704022", "b03704023", "b03704025", "b03704027", "b03704028", "b03704029", "b03704030", "b03704031", "b03704032", "b03704033", "b03704035", "b03704036", "b03704037", "b03704039", "b03704040", "b03704042", "b03704043", "b03704044", "b03704047", "b03704049", "b03704050", "b03704051", "b03704052", "b03704053", "b03704054", "b03704056", "b03704057", "b03704058", "b03704060", "b03704061", "b03704062", "b03704063", "b03704064", "b03704066", "b03704068", "b03704069", "b03704070", "b03704071", "b03704072", "b03704073", "b03704074", "b03704075", "b03704076", "b03704077", "b03704078", "b03704079", "b03704082", "b03704083", "b03704085", "b03704086", "b03704087", "b03704088", "b03704089", "b03704090", "b03704091", "b03704092", "b03704094", "b02704075", "b02704080" ],
"Midterm": [ 85, 96, 91, 91, 69, 81, 81, 76, 79, 65, 86, 69, 67, 95, 66, 90, 72, 91, 96, 62, 91, 94, 60, 72, 90, 90, 95, 50, 94, 94, 93, 82, 84, 62, 76, 68, 97, 63, 78, 99, 83, 82, 97, 51, 96, 92, 84, 82, 53, 56, 95, 65, 83, 51, 75, 63, 73, 74, 93, 64, 62, 76, 100, 77, 52, 82, 75, 82, 78, 86, 91, 61, 63, 92, 58, 56, 51, 80, 70, 97, 82, 70 ],
"Final": [ 63, 74, 85, 66, 59, 58, 91, 74, 92, 77, 50, 88, 60, 83, 93, 72, 84, 91, 53, 69, 76, 68, 98, 94, 67, 77, 57, 80, 69, 59, 79, 80, 82, 69, 87, 56, 86, 54, 89, 91, 94, 88, 90, 77, 71, 55, 95, 51, 58, 88, 99, 78, 93, 58, 70, 72, 96, 80, 99, 84, 68, 65, 90, 60, 75, 93, 54, 90, 97, 88, 89, 57, 96, 64, 94, 58, 52, 77, 71, 53, 87, 54 ],
"Participation": [ 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 90, 95, 95, 95, 95, 95, 95, 95, 95, 95, 85, 95, 95, 95, 95, 95, 95, 95, 95, 75, 95, 95, 95, 95, 95, 90, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 90, 95 ],
"Proposal": [ 82, 86, 89, 85, 86, 82, 100, 88, 83, 90, 95, 97, 89, 86, 97, 90, 82, 98, 80, 99, 92, 99, 85, 87, 82, 93, 81, 93, 98, 97, 92, 95, 81, 93, 85, 80, 88, 93, 93, 99, 95, 83, 87, 91, 83, 88, 85, 89, 86, 81, 82, 90, 83, 80, 94, 100, 83, 93, 88, 86, 97, 99, 97, 93, 81, 85, 80, 87, 100, 82, 89, 100, 85, 83, 100, 94, 90, 90, 92, 89, 91, 90 ] 
},
"facet": "Major",
"color": "Major",
"type": "point" 
} 
],
"facet": {
 "type": "wrap",
"var": "Major" 
},
"guides": [],
"coord": [],
"id": "chartea2f27917e54" 
}
    _.each(chartParams.layers, function(el){
        el.data = polyjs.data(el.data)
    })
    var graph_chartea2f27917e54 = polyjs.chart(chartParams);