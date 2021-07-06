const GraphObject = new (function() {
  self = this

  let samp_generator = new SampleGenerator
  
  self.primitive = gl.TRIANGLE_STRIP
  self.posVertBuffId = null
  self.colorVertBuffId = null
  // self.normalsVertBuffId = null
  // Initialize vertices
  self.posVertices = samp_generator.samples
  self.colorVertices = new Float32Array([])
  self.update = function() {
    samp_generator.updateSamples()
  }
})()