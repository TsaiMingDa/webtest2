 var ref = document.referrer;
  console.log('referrer: '+ref);
  //console.log(parent.location);
  var s ='parent.parent.test();';
  var i = document.createElement("iframe");
  i.src = ref;
  document.body.appendChild(i)
  i.contentDocument.write(s);
  i.contentDocument.close();