class ChLib
  constructor:->
  #urlのパラメーターを受け取りたい時に使う。返り値はhash。
  ch_get_params:->
    vars = []
    hash = []
    hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
    for i in [1..hashes.length]
      hash = hashes[i].split('=')
      vars.push(hash[0])
      vars[hash[0]] = hash[1]
      return vars
