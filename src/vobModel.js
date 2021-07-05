"use strict";

var VOBModel = function (obj_model) {

  // Shader variables
  var vert_loc = null;
  var color_loc = null;

  //-----------------------------------------------------------------------
  function _createGpuVob(data) {
    // Create a buffer object
    var buffer_id;

    buffer_id = gl.createBuffer();
    if (!buffer_id) {
      console.log('Failed to create the buffer object for ' + obj_model);
      return null;
    }

    // Make the buffer object the active buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer_id);

    // Upload the data for this buffer object to the GPU.
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    return buffer_id;
  }

  //-----------------------------------------------------------------------
  function _buildVobBuffers() {
    obj_model.posVertBuffId = _createGpuVob(obj_model.posVertices)
    obj_model.colorVertBuffId = _createGpuVob(obj_model.colorVertices)
  }

  //-----------------------------------------------------------------------
  function _getLocationOfShaderVariables() {
    // Get the location of the shader variables
    vert_loc = gl.getAttribLocation(shaderProg, 'a_ObjVert');
    color_loc = gl.getAttribLocation(shaderProg, 'a_Color');
  }

  //-----------------------------------------------------------------------
  // These one-time tasks set up the rendering of the models.
  _buildVobBuffers();
  _getLocationOfShaderVariables();

  //-----------------------------------------------------------------------
  this.delete = function () {
    gl.deleteBuffer(obj_model.posVertBuffId);
    gl.deleteBuffer(obj_model.colorVertBuffId);
  };

  //-----------------------------------------------------------------------
  this.render = function (transform_loc, transform) {

    // Set the transform for all the faces, lines, and points
    gl.uniformMatrix4fv(transform_loc, false, transform);

    // Activate the model's triangle vertex object buffer (VOB)
    gl.bindBuffer(gl.ARRAY_BUFFER, obj_model.posVertBuffId);

    // Bind the vertices VOB to the 'a_Vertex' shader variable
    gl.vertexAttribPointer(
      vert_loc,
      3,
      gl.FLOAT,
      gl.FALSE,
      3 * Float32Array.BYTES_PER_ELEMENT,
      0
    )
    gl.enableVertexAttribArray(vert_loc)

    // Activate the model's triangle color object buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, obj_model.colorVertBuffId);

    // // Bind the colors VOB to the 'a_Color' shader variable
    gl.vertexAttribPointer(
      color_loc, 
      3, 
      gl.FLOAT, 
      gl.FALSE, 
      3 * Float32Array.BYTES_PER_ELEMENT, 
      0
    );
    gl.enableVertexAttribArray(color_loc);

    // Draw all of the triangles

    gl.drawArrays(obj_model.primitive, 0, 3 * 2);

  };

};
