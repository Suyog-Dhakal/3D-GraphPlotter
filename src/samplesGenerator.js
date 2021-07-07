const SampleGenerator = new (function() {
  self = this
  
  self.samples = null
  
  let minX, maxX, minY, maxY
  let range_x, range_y, old_range_x, old_range_y
  let input_str = "", old_input_str = ""
  let x_samples = []
  let y_samples = []
  let z_samples = []
  let scope = {x: x_samples, y: y_samples}
    
  const _updateRanges = function() {
    range_x = document.getElementById("rangeX").value * 10
    range_y = document.getElementById("rangeY").value * 10
  }

  const _updateEqn = function() {
    input_str = document.getElementById("function").value
  }



  const _updateXSamples = function() {
    old_range_x = range_x

    minX = -range_x
    maxX =  range_x
    
    for (let x = minX; x <= maxX; x += SAMPLE_STEP_SIZE) {
        x_samples.push(x)
    }
  }

  const _updateYSamples = function() {
    old_range_y = range_y
    
    minY = -range_y
    maxY =  range_y
    
    for (let y = minY; y <= maxY; y += SAMPLE_STEP_SIZE) {
        y_samples.push(y)
    }
  }

  const _updateZSamples = function() {
    old_input_str = input_str
    
    if (input_str) {
      z_samples = math.evaluate(input_str, scope)
    }
  }
  

  const _zipSamples = function() {
    let zipped = []
    range = range_x < range_y ? x_samples.length : y_samples.length

    for (let i = 0; i < range; ++i) {
      zipped.push(x_samples[i])
      zipped.push(y_samples[i])
      zipped.push(z_samples[i])
    }
    return zipped
  }
    
  self.update = function() {
    _updateRanges()
    _updateEqn()
    
    if (old_range_x != range_x) _updateXSamples()
    if (old_range_y != range_y) _updateYSamples()
    if (old_input_str != input_str) _updateZSamples()

    self.samples = new Float32Array(_zipSamples())
  }
  self.update()

})()