$(function() {
	// Deck initialization
	$.deck('.slide');
	
	$('#style-themes').change(function() {
		$('#style-theme-link').attr('href', $(this).val());
	});
	
	$('#transition-themes').change(function() {
		$('#transition-theme-link').attr('href', $(this).val());
	});
});

var presentationHelper = (function() {
    var map = {};
    
    map['continuousLearner.jpg.next'] = {src:'softwareDeveloper.jpg', alt:'Developer'};
    map['softwareDeveloper.jpg.next'] = {src:'father.jpg', alt:'Father'};
    map['softwareDeveloper.jpg.prev'] = map['continuousLearner.jpg.next']; 
    map['father.jpg.next'] = {src:'grandfather.jpg', alt:'Grand Father'};
    
        return {
            getImage: function(curImgSrc, direction) {
                 var mapKey = curImgSrc + '.' + direction || 'next',
                     obj = map[mapKey];
                     
                //var idx = to - offset;
                //return idx >= 0 && idx <= map.length -1 ? map[idx] : {src='#', alt='no image found'};
                return obj;
            }
        };
}());
