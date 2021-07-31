const SampleGenerator = new (function() {
  self = this
  
  self.samples = null
  self.normals = null
  
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
    // samples_step = (1 - document.getElementById("resolution_scale").value) / 10
    samples_step = (1 - document.getElementById("resolution_scale").value)
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

  // Generates normal vector using 3 vertices
  const _generateNormal = function(v1, v2, v3) {
    let normal = vec3.create()
    let v12 = vec3.create()
    let v13 = vec3.create()

    vec3.cross(normal, vec3.subtract(v12, v1, v2), vec3.subtract(v13, v1, v3))
    vec3.normalize(normal, normal)
    
    return Array(...normal)
  }

  const _zipWithZSamples = function() {
    if (!input_str) return

    let v1 = [], v2 = [], v3 = []
    let zippedZ = []
    let zippedNormals = []
    let evaluateZ = () => { return math.evaluate(input_str, {x, y})}
    old_input_str = input_str
    old_sample_step = samples_step
    
    for (x of x_samples) {
      for (y of y_samples) {
        v1 = [x, y, evaluateZ()]
        x++
        v2 = [x, y, evaluateZ()]        
        y++
        v3 = [x, y, evaluateZ()]
        zippedNormals.push(..._generateNormal(vec3.fromValues(...v1), vec3.fromValues(...v2), vec3.fromValues(...v3)))
        zippedZ.push(...v1, ...v2, ...v3)
      }
    }
    self.samples = new Float32Array(zippedZ)
    self.normals = new Float32Array(zippedNormals)
  }
    
  self.update = function() {
    _updateRanges()
    _updateEqn()
    _updateResolution()
    
    if (old_range_x != range_x) _generateXSamples()
    if (old_range_y != range_y) _generateYSamples()
    _zipWithZSamples()
  }
  self.update()
})()