const compileVertexShader = (src) => {
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertexShader, src)
  gl.compileShader(vertexShader)

  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.log('ERR compiling vertex shader: ', gl.getShaderInfoLog(vertexShader))
    return
  }

  return vertexShader
}

const compileFragmentShader = (src) => {
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragmentShader, src)
  gl.compileShader(fragmentShader)

  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.log('ERR compiling fragment shader: ', gl.getShaderInfoLog(fragmentShader))
    return
  }

  return fragmentShader
}

// Returns a program with vertex and fragment shader attached
const getShaderProgram = () => {
  const vertexShader = compileVertexShader(vertexShaderSrc)
  const fragmentShader = compileFragmentShader(fragmentShaderSrc)

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log('ERR linking program: ', gl.getProgramInfoLog(program))
    return
  }
  
  gl.validateProgram(program)
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
    console.log('ERR validating program: ', gl.getProgramInfoLog(program))
    return
  }

  gl.useProgram(program)
  return program
}