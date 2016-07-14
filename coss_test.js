 var ref = document.referrer;
  console.log('referrer: '+ref);
  //console.log(parent.location);
  var s ='<script>parent.parent.test();</script>';
  var i = document.createElement("iframe");
  i.src = ref;
  document.body.appendChild(i)
  i.contentDocument.write(s);
  i.contentDocument.close();

    var i = document.createElement("iframe");
  i.src = 'http://tsaimingda.github.io/practice/';
  document.body.appendChild(i)