$(document).ready(function(){
	if(status) $('.open').select();
	else $('.closed').select();

  // update event
	$('.update-btn').on('click', function(){
		var data = {};
		data.stat = $('.open').is(':checked');
		data.pw = $('.pw').val().hashCode();
		socket.emit('admin-update', data);
		$('input.pw').val('');
		$('more-info').hide();
	});

  // incorrect password event
	socket.on('incorrect-pass', function(){
		$('input.pw').attr('placeholder', 'incorrect');
	});
});

// string method to get hash from string
String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

