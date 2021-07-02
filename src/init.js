// Gets global gl object
const canvas = document.querySelector('canvas')
const getGL = () => {
  const gl = canvas.getContext('webgl')
  
  if (!gl) {
    alert('WebGL not supported')
    return
  }

  return gl
} 
const gl = getGL()

// gl-matrix-lib 
const {mat2, mat3, mat4, vec2, vec3, vec4} = glMatrix
const DIMENSIONS = 3
const ORIGIN = {
  X: 0,
  Y: 0,
  Z: 0
}
const INIT_AXES_RANGE = 20

// Initializes rendering screen of Graph canvas
const initGraphCanvas = (() => {
  gl.clearColor(0.9, 0.9, 0.9, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  gl.enable(gl.DEPTH_TEST)
  // gl.enable(gl.CULL_FACE)
  // gl.frontFace(gl.CCW)
  // gl.cullFace(gl.BACK)
})()
  