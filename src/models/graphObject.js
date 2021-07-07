const GraphObject = new (function() {
  self = this

  self.primitive = gl.TRIANGLE_STRIP
  self.posVertBuffId = null
  self.colorVertBuffId = null
  // self.normalsVertBuffId = null
  // Initialize vertices
  self.posVertices = SampleGenerator.samples
  self.colorVertices = new Float32Array([
    1, 1, 0,
    1, 1, 0,
    1, 1, 0,
    1, 1, 0,
    1, 1, 0,
    1, 1, 0,
  ])
  self.update = function() {
    SampleGenerator.update()
  }
  self.update()
})()
