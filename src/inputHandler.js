const SampleGenerator = function() {
  self = this
  
  self.samples = new Float32Array()

  let minX, maxX, minY, maxY
  let range_x, range_y
  let input_str = ""
  let x_samples = []
  let y_samples = []
  let z_samples = []
  let scope = {x: x_samples, y: y_samples}
    
  let updateInputs = function() {
    range_x = document.getElementById("rangeX").value
    range_y = document.getElementById("rangeY").value
    input_str = document.getElementById("function").value
  }

  let updateZSamples = function() {
    if (input_str) {
      z_samples = math.evaluate(input_str, scope)
    }
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
  }
}