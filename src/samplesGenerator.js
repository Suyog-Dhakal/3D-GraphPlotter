const SampleGenerator = function() {
  
  self.samples = null
  
  let minX, maxX, minY, maxY
  let range_x, range_y
  let input_str = ""
  let x_samples = []
  let y_samples = []
  let z_samples = []
  let scope = {x: x_samples, y: y_samples}
    
  const updateInputs = function() {
    range_x = document.getElementById("rangeX").value
    range_y = document.getElementById("rangeY").value
    input_str = document.getElementById("function").value
  }

  const updateZSamples = function() {
    if (input_str) {
      z_samples = math.evaluate(input_str, scope)
    }
  }

  const zipSamples = function() {
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
    updateInputs()

    minX = -10 * range_x
    maxX =  10 * range_x
    minY = -10 * range_y
    maxY =  10 * range_y
    
    for (let x = minX, y = minY;
      x <= maxX || y <= maxY; 
      x += SAMPLE_STEP_SIZE, y += SAMPLE_STEP_SIZE
    ) {
        x_samples.push(x)
        y_samples.push(y)
    }
    updateZSamples()

    self.samples = new Float32Array([zipSamples()])
  }

}