const coordAxes = {
    primitive: gl.LINES,
    vertBuffId: null,
    vertBuff: gl.createBuffer(),
    normalsVertBuff: gl.createBuffer(),     
        
    // Initialize vertices
    axesVertices: new Float32Array([
      // X-axis coordinates
      ORIGIN.X,          ORIGIN.Y,         ORIGIN.Z,       
      INIT_AXES_RANGE,   ORIGIN.Y,         ORIGIN.Z,       
      // Y-axis coordinates
      ORIGIN.X,         ORIGIN.Y,          ORIGIN.Z,       
      ORIGIN.X,         INIT_AXES_RANGE,   ORIGIN.Z,       
      // Z-axis coordinates
      ORIGIN.X,          ORIGIN.Y,         ORIGIN.Z,        
      ORIGIN.X,          ORIGIN.Y,         INIT_AXES_RANGE,
    ]),
  
    // setVertices: (minX, maxX, minY, maxY, minZ, maxZ) => {
    //   let midX = ORIGIN.X
    //   let midY = ORIGIN.Y
    //   let midZ = ORIGIN.Z
  
    //   axesVertices = [
    //     minX, midY, midZ, 1,
    //     maxX, midY, midZ, 1,
    //     midX, minY, midZ, 1,
    //     midX, maxY, midZ, 1,
    //     midX, midY, minZ, 1,
    //     midX, midY, maxZ, 1,
    //   ]
    // },
  };
  
const CoordAxes = new (function() {
  self = this

  self.primitive = gl.LINES
  self.posVertBuffId = null
  self.colorVertBuffId = null
  // self.normalsVertBuffId = null
  // Initialize vertices
  self.posVertices = new Float32Array([
    // X-axis coordinates
    ORIGIN.X,          ORIGIN.Y,         ORIGIN.Z,       
    INIT_AXES_RANGE,   ORIGIN.Y,         ORIGIN.Z,       
    // Y-axis coordinates
    ORIGIN.X,         ORIGIN.Y,          ORIGIN.Z,       
    ORIGIN.X,         INIT_AXES_RANGE,   ORIGIN.Z,       
    // Z-axis coordinates
    ORIGIN.X,          ORIGIN.Y,         ORIGIN.Z,        
    ORIGIN.X,          ORIGIN.Y,         INIT_AXES_RANGE,
  ])
  self.colorVertices = new Float32Array([
    // X-axis red
    1, 0, 0,
    1, 0, 0,
    // Y-axis green
    0, 1, 0,
    0, 1, 0,
    // Z-axis blue
    0, 0, 1,
    0, 0, 1,
  ])

  self.setVertices = (minX, maxX, minY, maxY, minZ, maxZ) => {
    let midX = ORIGIN.X
    let midY = ORIGIN.Y
    let midZ = ORIGIN.Z

    self.axesVertices = [
      minX, midY, midZ, 1,
      maxX, midY, midZ, 1,
      midX, minY, midZ, 1,
      midX, maxY, midZ, 1,
      midX, midY, minZ, 1,
      midX, midY, maxZ, 1,
    ]
  }
  
})()