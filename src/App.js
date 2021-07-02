const coordAxes = {
  primitive: gl.LINES,
  vertBuff: gl.createBuffer(),
  normalsVertBuff: gl.createBuffer(),
  
// normalsData: [
//     1.0,0.0,0.0,
//     1.0,0.0,0.0,
//     1.0,0.0,0.0,
//     1.0,0.0,0.0,
//     1.0,0.0,0.0,
//     1.0,0.0,0.0
// ],      
      
  // Initialize vertices
  axesVertices: new Float32Array([
    // X-axis coordinates
    -INIT_AXES_RANGE,  ORIGIN.Y,         ORIGIN.Z,        1,
     INIT_AXES_RANGE,  ORIGIN.Y,         ORIGIN.Z,        1,
    // Y-axis coordinates
    ORIGIN.X,         -INIT_AXES_RANGE,  ORIGIN.Z,        1,
    ORIGIN.X,          INIT_AXES_RANGE,  ORIGIN.Z,        1,
    // Z-axis coordinates
    ORIGIN.X,          ORIGIN.Y,        -INIT_AXES_RANGE, 1,
    ORIGIN.X,          ORIGIN.Y,         INIT_AXES_RANGE, 1,
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



const main = (() => {
  const shaderProg = getShaderProgram()
  
  const objMat = coordAxes.axesVertices

  gl.bindBuffer(gl.ARRAY_BUFFER, coordAxes.vertBuff)
  gl.bufferData(gl.ARRAY_BUFFER, objMat, gl.STATIC_DRAW)

  const posVertAttribLoc = gl.getAttribLocation(shaderProg, 'u_ObjVert')
  // const worldMatAttribLoc = gl.getUniformLocation(shaderProg, 'u_WorldMat')
  // const viewMatAttribLoc = gl.getUniformLocation(shaderProg, 'u_ViewMat')
  // const projMatAttribLoc = gl.getUniformLocation(shaderProg, 'u_ProjMat')

  gl.vertexAttribPointer(
    posVertAttribLoc,
    4,
    gl.FLOAT,
    gl.FALSE,
    4 * Float32Array.BYTES_PER_ELEMENT,
    0
  )
  // const worldMat = mat4.create()
  // const viewMat = mat4.create()
  // const projMat = mat4.create()
  // console.log(worldMat)
  // mat4.identity(worldMat)
  // mat4.lookAt(
  //   viewMat,
  //   [0, 0, -5],
  //   [0, 0, 0],
  //   [0, 1, 0],
  // )
  // mat4.perspective(
  //   projMat,
  //   45 * Math.PI/180,
  //   1,
  //   0.1,
  //   1000.0
  // )
  
  // gl.uniformMatrix4fv(worldMatAttribLoc, gl.FALSE, worldMat)
  // gl.uniformMatrix4fv(viewMatAttribLoc, gl.FALSE, viewMat)
  // gl.uniformMatrix4fv(projMatAttribLoc, gl.FALSE, projMat)
  
  gl.enableVertexAttribArray(posVertAttribLoc)
  
  gl.drawArrays(
    gl.LINES,
    0,
    3
  )
  
    
})()