const SampleGenerator = function() {
  
  self.samples = null
  
  let minX, maxX, minY, maxY
  let range_x, range_y, old_range_x, old_range_y
  let input_str = "", old_input_str = ""
  let x_samples = []
  let y_samples = []
  let z_samples = []
  let scope = {x: x_samples, y: y_samples}
    
  const _updateRanges = function() {
    range_x = document.getElementById("rangeX").value
    range_y = document.getElementById("rangeY").value
  }

  const _updateEqn = function() {
    input_str = document.getElementById("function").value
  }



  const _updateXSamples = function() {
    old_range_x = range_x

    minX = -10 * range_x
    maxX =  10 * range_x
    
    for (let x = minX; x <= maxX; x += SAMPLE_STEP_SIZE) {
        x_samples.push(x)
    }
  }

  const _updateYSamples = function() {
    old_range_y = range_y
    
    minY = -10 * range_y
    maxY =  10 * range_y
    
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
    limit = range_x < range_y ? range_x : range_y

    for (let i = 0; i < limit; ++i) {
      zipped.push(x_samples[i])
      zipped.push(y_samples[i])
      zipped.push(z_samples[i])
    }
    return zipped
  }
    
  self.updateSamples = function() {
    _updateRanges()
    _updateEqn()
    
    if (old_range_x != range_x) _updateXSamples()
    if (old_range_y != range_y) _updateYSamples()
    if (old_input_str != input_str) _updateZSamples()

    self.samples = new Float32Array([_zipSamples()])
  }

}