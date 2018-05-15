function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    for(var j = 0; i < instruments.length; j++) {
      var string = musicians[i] + " plays " + instruments[j]
      array.push(string)
    }  
  }
  return array
}