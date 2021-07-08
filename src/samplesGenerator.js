const SampleGenerator = new (function() {
  self = this
  
  self.samples = null
  
  let minX, maxX, minY, maxY
  let range_x, range_y, old_range_x, old_range_y
  let input_str = "", old_input_str = ""
  let samples_step, old_sample_step
  let x_samples = []
  let y_samples = []
    
  const _updateRanges = function() {
    range_x = document.getElementById("rangeX").value * 10
    range_y = document.getElementById("rangeY").value * 10
  }

  const _updateEqn = function() {
    input_str = document.getElementById("function").value
  }

  const _updateResolution = function() {
    samples_step = 1 - document.getElementById("resolution_scale").value
  }

  const _generateXSamples = function() {
    old_range_x = range_x
    old_sample_step = samples_step

    minX = -range_x
    maxX =  range_x
    
    for (let x = minX; x <= maxX; x += samples_step) {
        x_samples.push(x)
    }
  }

  const _generateYSamples = function() {
    old_range_y = range_y
    old_sample_step = samples_step
    
    minY = -range_y
    maxY =  range_y
    
    for (let y = minY; y <= maxY; y += samples_step) {
        y_samples.push(y)
    }
  }

  const _zipWithZSamples = function() {
    let zipped = []
    old_input_str = input_str
    old_sample_step = samples_step
    range = range_x < range_y ? x_samples.length : y_samples.length
    
    if (!input_str) return null
    
    for (x of x_samples) {
      for (y of y_samples) {
        zipped.push(math.evaluate(input_str, {x, y}))
      }
    }
    return zipped
  }
    
  self.update = function() {
    _updateRanges()
    _updateEqn()
    _updateResolution()
    
    if (old_range_x != range_x) _generateXSamples()
    if (old_range_y != range_y) _generateYSamples()
    self.samples = new Float32Array(_zipWithZSamples())
  }
  self.update()
})()