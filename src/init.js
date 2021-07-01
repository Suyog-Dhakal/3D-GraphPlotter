// Gets global gl object
const getGL = () => {
  const canvas = document.querySelector('canvas')
  const gl = canvas.getContext('webgl')
  
  if (!gl) {
    alert('WebGL not supported')
    return
  }

  return gl
} 
const gl = getGL()

// Initializes rendering screen of Graph canvas
const initGraphCanvas = (() => {
  gl.clearColor(0.9, 0.9, 0.9, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  gl.enable(gl.DEPTH_TEST)
  // gl.enable(gl.CULL_FACE)
  // gl.frontFace(gl.CCW)
  // gl.cullFace(gl.BACK)
})()
  