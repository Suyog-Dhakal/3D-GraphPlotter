const vertexShaderSrc = 
`
precision mediump float;
// attribute vec4 a_position;
// attribute vec4 a_normal;
// uniform mat4 transform;
// varying vec3 v_transformedNormal;

attribute vec3 a_ObjVert;
attribute vec3 a_Color;
uniform mat4 u_MVP;

varying vec3 v_Color;

void main() {
    gl_Position = u_MVP * vec4(a_ObjVert, 1.0);
    v_Color = a_Color;
    
    // gl_Position = transform * a_position;
    // v_transformedNormal = normalize(vec3(transform * a_normal));
    // v_transformedNormal = normalize(vec3(a_normal));
}
`

// module.exports = vertexShaderSource