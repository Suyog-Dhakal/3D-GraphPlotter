const vertexShaderSrc = 
`
precision mediump float;
precision mediump int;

attribute vec3 a_ObjVert;
attribute vec3 a_Color;
attribute vec3 a_Normal;

uniform mat4 u_MVP;

varying vec3 v_Color;
varying vec3 v_Normal;

void main() {
    gl_Position = u_MVP * vec4(a_ObjVert, 1.0);
    v_Color = a_Color;
    v_Normal = normalize(a_Normal);
}
`