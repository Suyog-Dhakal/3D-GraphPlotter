const GraphObject = new (function() {
  self = this

  self.primitive = gl.TRIANGLE_STRIP

  self.posVertBuffId = null
  self.normalsBuffId = null

  // Initialize vertices
  self.posVertices = SampleGenerator.samples
  self.normals = SampleGenerator.normals

  self.color = new Float32Array([0.7, 0.3, 0.3])
  self.fading = 0.0
  self.ambientStrength = 1.0

  self.update = function() {
    SampleGenerator.update()
  }
})()
